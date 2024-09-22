const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      } else {
        reject(new Error('Geolocation không được hỗ trợ'));
      }
    });
  };
  
  export default {
    getCurrentPosition,
  };