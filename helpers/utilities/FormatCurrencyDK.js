

export  function formatCurrencyDK(value) {
    // Check if the input is a valid number
    if (isNaN(value)) {
      return "Invalid input";
    }
  
    // Format the number with Danish locale and 2 decimal places
    const formattedValue = value.toLocaleString("da-DK", {
      style: "decimal",
      maximumFractionDigits: 2,
    });
  
    // Add the "kr." suffix
    return `${formattedValue} kr.`;
  }
  