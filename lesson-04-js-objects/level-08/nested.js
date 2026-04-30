// TODO: Default-export an object with nested properties.
// Example: export default { theme: { color: 'blue' } }

const house = {
  color: "white",
  rooms: {
    bedroom: true,
    bathroom: true,
    sunroom: false,
    patio: true,
    livingRoom: true
  }
};

console.log(house.rooms.sunroom);
export default house;
