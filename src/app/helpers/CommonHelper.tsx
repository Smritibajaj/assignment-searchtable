// Returns the cost upto 2 decimal places
export const formatPrice = (value?: number, decimalPlaces = 2, returnNumber = false) => {
    if(value)
        return (Math.round(value * 100) / 100).toFixed(decimalPlaces); 
    else if(returnNumber) {
        return (Math.round(0 * 100) / 100).toFixed(decimalPlaces);
    }
    else {
        return value;
    }
};


export const getCityDetails = (data: any) => {
    const getInfo = (data: any) => {
      return `${data?._city?.name || ''},  ${data?._state?.name  || ''}, ${data?._city?.pincode  || ''},  ${data?._country?.name  || ''}`.trim();
    }
    const details = {
      city: data?._city?.name,
      country: data?._state?.name,
      state: data?._country?.name,
      pincode: data?._city?.pincode,
      getInfo: getInfo(data) || 'NA',
    };
  
    return details;
};

export const createMapForStaticData = (array: any, key: string) => {
    const map = array?.reduce((acc: any, cum: any) => {
      return {
        ...acc,
        [cum.id]: {
          key: cum.id,
          value: cum.id,
          text: cum[key],
        },
      };
    }, {});
    return map;
  };
