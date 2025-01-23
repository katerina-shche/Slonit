function capitalize(str) {
    if (typeof str !== 'string') {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    
}

function shortenString(str, maxLength) {
    if (str.length <= maxLength) {
      return str;
    }
  
    const separatorRegex = /[.,!?:; ]/;
  
    let cutIndex = -1;
    for (let i = maxLength; i >= 0; i--) {
      if (separatorRegex.test(str[i])) {
        cutIndex = i;
        break;
      }
    }

    if (cutIndex === -1) {
      cutIndex = maxLength - 3;
    }

    return str.slice(0, cutIndex) + "...";
  }

  function isSubstring(str1, str2) {
    return ( str1.includes(str2) || str2.includes(str1) );
  }
  
  console.log(capitalize('еКатерИна')); 
  console.log(shortenString("Это пример очень длинной строки, которая не помещается в интерфейс.", 40));
  console.log(shortenString("Короткая строка", 40));
  console.log(shortenString("NotSoLongButStillLargeExampleString NotSoLongButStillLargeExampleString NotSoLongButStillLargeExampleString ", 20));
  console.log(isSubstring("Короткая строка", "Короткая"));
  console.log(isSubstring("стр", "строка"));
  console.log(isSubstring("ляля", "парам"));



