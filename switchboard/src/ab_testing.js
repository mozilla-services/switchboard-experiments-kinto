export function isEnabled(feature) {
  return feature.buckets.min !== feature.buckets.max;
}

export function isDisabled(feature) {
  return !isEnabled(feature);
}

export function matches(feature, userAgent, languages, country) {
  // Handle Match
  const match = feature.match;
  let matches = true;

  // User-Agent match
  if (match.hasOwnProperty('userAgent')) {
    const uaMatching = new RegExp(match.userAgent).exec(userAgent);
    if (!uaMatching)  matches = false;
  }

  // Language Matching
  if (match.hasOwnProperty('lang')) {
    const featureLanguages = languages.filter(language => {
      return new RegExp(match.lang).exec(language);
    });

    if (languages.length === 0) {
      matches = false;
    }
  }

  // Country Matching
  if (match.hasOwnProperty('country')) {
    const countryMatching = new RegExp(match.country).exec(country);
    if (!countryMatching) {
      matches = false;
    }
  }

  // Other filters doesn't match because they are not supported yet.
  const otherKeys = Object.keys(match).filter(x => {
    return ['userAgent', 'lang', 'country'].indexOf(x) === -1;
  });

  if (otherKeys.length > 0) {
    matches = false;
  }

  return matches;
}

export function isActive(feature, fingerprint) {
  const deviceID = parseInt(fingerprint.deviceID, 16);
  const userBucket = deviceID % 100;

  console.log("User Bucket is:", userBucket);

  const low = parseInt(feature.buckets.min, 10);
  const high = parseInt(feature.buckets.max, 10);

  return (userBucket >= low) && (userBucket < high);
}

export function isActivatedFeature(feature, fingerprint, userAgent, languages, country) {
  return isActive(feature, fingerprint) && matches(feature, userAgent, languages, country);
}

export function getFeature(name, features) {
  if (!features) return null;

  const filtered = features.filter(feature => {
    return feature.name === name;
  })
  if (filtered.length === 0) {
    return null;
  }
  return filtered[0];
}
