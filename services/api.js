export const getHotels = async () => {
  const hotels = ref([]);
  try {
    let data = await fetch('http://localhost:8000/hotels');
    hotels.value = await data.json();
    if (!data.ok) {
      console.log('data not avaibale');
    }
  } catch (err) {
    console.log('error');
  }
  return hotels;
};

export const getHotel = async id => {
  const hotel = ref();
  try {
    let data = await fetch(`http://localhost:8000/hotels/${id}`);
    hotel.value = await data.json();
    if (!data.ok) {
      console.log('data not avaibale');
    }
  } catch (err) {
    console.log('error');
  }
  return hotel;
};
