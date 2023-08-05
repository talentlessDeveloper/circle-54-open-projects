const users = [
  {
    firstName: 'John',
    lastName: 'Doe',
    city: 'New York',
    country: 'United States',
    hobbies: ['reading', 'writing', 'coding'],
    email: 'john.doe@example.com',
    imageUrl:
      'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    id: 'Alt29',
    track: 'cloud',
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    city: 'Los Angeles',
    country: 'Canada',
    hobbies: ['playing sports', 'traveling', 'writing'],
    email: 'jane.smith@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    id: 'Alt25',
    track: 'backend',
  },
  {
    firstName: 'Mary',
    lastName: 'Williams',
    city: 'Chicago',
    country: 'Mexico',
    hobbies: ['coding', 'reading', 'traveling'],
    email: 'mary.williams@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    id: 'Alt2',
    track: 'backend',
  },
  {
    firstName: 'Larry',
    lastName: 'Cole',
    city: 'Abuja',
    country: 'Nigeria',
    hobbies: ['sleeping', 'surfing', 'smiling'],
    email: 'larrycole.ans@axel.com',
    imageUrl:
      'https://images.unsplash.com/photo-1687360440102-78d15c3e5045?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
    id: 'Alt17',
    track: 'backend',
  },
  {
    firstName: 'Zee',
    lastName: 'Kay',
    city: 'Minna',
    country: 'Nigeria',
    hobbies: ['gaming', 'surfing', 'punting'],
    email: 'zeekay.ui@axel.com',
    imageUrl:
      'https://media.istockphoto.com/id/1460126156/photo/laughing-business-woman-portrait-and-vision-for-startup-career-growth-and-success-a-happy.jpg?s=612x612&w=0&k=20&c=JGTNaufVGR7T3JstIJkCnUdhiVTBvw9VTOrAMKkTEeA=',
    id: 'Alt37',
    track: 'cloud',
  },
  {
    firstName: 'Ola',
    lastName: 'Haid',
    city: 'Holland',
    country: 'Netherland',
    hobbies: ['singing', 'writing', 'dancing'],
    email: 'olahaid.mx@axel.com',
    imageUrl:
      'https://media.istockphoto.com/id/1291763869/photo/cant-wait-to-smash-more-goals-tomorrow.jpg?s=612x612&w=0&k=20&c=CKm444pC76ZXaTBLCILyuv1sTf3JkejD37ZiulJlBPg=',
    id: 'Alt9',
    track: 'frontend',
  },
  {
    firstName: 'Chris',
    lastName: 'Benoit',
    city: 'Bali',
    country: 'Croatia',
    hobbies: ['skating', 'hacking', 'playing'],
    email: 'chrisbenoit.mx@axel.com',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1688497830987-e4f7ce4da50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    id: 'Alt8',
    track: 'backend',
  },
  {
    firstName: 'Anastasia',
    lastName: 'Vladimirovna',
    city: 'Krasnodar',
    country: 'Russia',
    hobbies: ['driving', 'swimming', 'reading'],
    email: 'anastasia.vlad.mx@axel.com',
    imageUrl:
      'https://images.unsplash.com/photo-1689327021554-6c223aba4bfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    id: 'Alt13',
    track: 'cloud',
  },
  {
    firstName: 'Alex',
    lastName: 'Moon',
    city: 'Molde',
    country: 'Norway',
    hobbies: ['reading', 'writing', 'playing FIFA'],
    email: 'alexmoon.mx@axel.com',
    imageUrl:
      'https://media.istockphoto.com/id/1257829017/photo/man-working-at-home-using-laptop.jpg?s=612x612&w=0&k=20&c=_frNqNJrYfl1ngNwTdnPKMrhnW6LL-dtFvhK27tjRKY=',
    id: 'Alt7',
    track: 'frontend',
  },
  {
    firstName: 'kareem',
    lastName: 'Ope',
    city: 'Lagos',
    country: 'Nigeria',
    hobbies: ['Coding', 'Reading', 'Movies'],
    email: 'opekareem@gmail.com',
    imageUrl:
      'https://images.unsplash.com/photo-1689351355399-65dbf9acd3e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    id: 'Alt24',
    track: 'cloud',
  },
  {
    firstName: 'valerie',
    lastName: 'Jen',
    city: 'Abuja',
    country: 'Nigeria',
    hobbies: ['Coding', 'Reading', 'Movies'],
    email: 'nwanyiocha@gmail.com',
    imageUrl:
      'https://images.unsplash.com/photo-1689701252350-8a67a36b3025?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    id: 'Alt32',
    track: 'cloud',
  },
  {
    firstName: 'promise',
    lastName: 'Osas',
    city: 'Benin',
    country: 'Nigeria',
    hobbies: ['Eating', 'playing Fifa', 'Cooking'],
    email: 'proosa@example.com',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1689177357760-90b18b4451aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    id: 'Alt27',
    track: 'frontend',
  },
  {
    firstName: 'Justin',
    lastName: 'Perkins',
    city: 'Los Angeles',
    country: 'USA',
    hobbies: ['Hiking', 'Baeaway', 'Music'],
    email: 'justinperkins@gmail.com',
    imageUrl:
      'https://images.unsplash.com/photo-1687360440102-78d15c3e5045?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
    id: 'Alt20',
    track: 'frontend',
  },
  {
    firstName: 'Robin',
    lastName: 'Høj',
    city: 'Austin',
    country: 'USA',
    hobbies: ['Acroyoga', 'Acting', 'Animating'],
    email: 'rHoj@yahoo.com',
    imageUrl:
      'https://images.unsplash.com/photo-1594167154836-838be958f605?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80',
    id: 'Alt12',
    track: 'backend',
  },
  {
    firstName: 'Troels',
    lastName: 'Toft',
    city: 'Helsingor',
    country: 'Denmark',
    hobbies: ['Anime', 'Art', 'Card games'],
    email: 'ttoft125@AltSchl.io',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1688700438179-b649d32b192f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    id: 'Alt3',
    track: 'backend',
  },
];

const tracks = ['frontend', 'backend', 'cloud'];

const randomTrack = () => {
  return tracks[Math.floor(Math.random() * tracks.length)];
};

const generateUniqueRandomNumbers = (n) => {
  const uniqueRandomNumbers = [];
  while (uniqueRandomNumbers.length < n) {
    const randomNumber = Math.floor(Math.random() * 40) + 1;
    if (!uniqueRandomNumbers.includes(randomNumber)) {
      uniqueRandomNumbers.push(randomNumber);
    }
  }
  console.log(uniqueRandomNumbers);
  return uniqueRandomNumbers;
};

const randomIds = generateUniqueRandomNumbers(users.length);
const newUsers = users.map((user, idx) => {
  return {
    ...user,
    id: `Alt${randomIds[idx]}`,
    track: randomTrack(),
  };
});

export { users, newUsers };
