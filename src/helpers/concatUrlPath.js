export function concatUrlPath(url, name, id) {
  // Clean up the product name and limit it to the first four words
  const formattedName = name
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove invalid characters except spaces and hyphens
      .split(/\s+/) // Split the name into words
      .slice(0, 4) // Take the first four words
      .join('-'); // Join the words with hyphens

  // Concatenate the name and id
  const fullPath = `${formattedName}-${id}`;
  return `/${url}/${fullPath}`;
}





export function extractIdFromUrlPath(path) {
  // Match the last number in the URL after a hyphen or standalone
  const segments = path.split('-'); // Split the string by '-'
  const lastSegment = segments.pop(); // Get the last segment

  if (!isNaN(lastSegment)) {
    return lastSegment;
  }
  return null;
}


