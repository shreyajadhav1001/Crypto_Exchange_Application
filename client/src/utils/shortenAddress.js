// export const shortenAddress = (address) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
export const shortenAddress = (address) => {
    if (!address) return ''; // Handle case when address is not provided
  
    // Check if the address has the 'slice' method before using it
    if (typeof address !== 'string' || typeof address.slice !== 'function') {
      console.error('Invalid address:', address);
      return '';
    }
  
    // Perform address shortening
    if (address.length < 9) {
      return address; // Return full address if it's already short
    } else {
      return `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
    }
  };
  