import { ref } from 'vue';

const getHotels = () => {
  const hotels = ref([]);

  const load = async () => {
    try {
      let data = await fetch('http://localhost:8000/hotels');
      hotels.value = await data.json();
      if (!data.ok) {
        console.log('data not avaibale');
      }
    } catch (err) {
      console.log('error');
    }
    console.log(hotels.value);
  };

  return { hotels, load };
};

export default getHotels;
