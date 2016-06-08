export function isEnabled(feature) {
  return feature.buckets.min !== feature.buckets.max;
}

export function isDisabled(feature) {
  return !isEnabled(feature);
}

export function matches(feature, userAgent, languages, country) {
  // Handle Match
  const match = feature.match;
  let uaMatching = true,
      langMatching = true,
      countryMatching = true,
      otherKeys = false;

  // User-Agent match
  if (match.hasOwnProperty('userAgent')) {
    uaMatching = new RegExp(match.userAgent, "i").test(userAgent);
  }

  // Language Matching
  if (match.hasOwnProperty('lang')) {
    langMatching = languages.some(language => new RegExp(match.lang, "i").test(language));
  }

  // Country Matching
  if (match.hasOwnProperty('country')) {
    countryMatching = new RegExp(match.country, "i").test(country);
  }

  // Other filters doesn't match because they are not supported yet.
  otherKeys = Object.keys(match).some(x => ['userAgent', 'lang', 'country'].indexOf(x) === -1);

  return uaMatching && langMatching && countryMatching && !otherKeys;
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
