const movies = [
  // ─── HINDI / BOLLYWOOD (25 movies) ───────────────────────────────────
  {
    id: '1', title: 'Sholay', year: 1975, rating: 8.2, duration: '3h 24m',
    genre: ['Action', 'Adventure', 'Drama'], language: 'Hindi',
    keywords: ['Bollywood', 'Hindi', 'Indian', 'Classic', 'Dacoit'],
    description: 'A retired police officer enlists two criminals to capture a ruthless dacoit terrorizing a village. The ultimate Indian blockbuster that defined an era of cinema.',
    poster: 'https://image.tmdb.org/t/p/original/ya9bwgqA4eNl5bQ9QqS0jcmRoBS.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/nu3Hd3K4ZXCHsPkanuJ2csY0bOC.jpg',
    cast: [
      { name: 'Dharmendra', role: 'Veeru', photo: 'https://image.tmdb.org/t/p/original/aagrv7LIDWq0GxZelUPqubCg7sH.jpg' },
      { name: 'Amitabh Bachchan', role: 'Jai', photo: 'https://image.tmdb.org/t/p/original/yAvq3EG5W5WaegZHB7gNdlM2KED.jpg' },
      { name: 'Hema Malini', role: 'Basanti', photo: 'https://image.tmdb.org/t/p/original/dfNRjtvbxisRSBDhCoUMuEFyY3V.jpg' },
    ],
    director: 'Ramesh Sippy', tags: ['Classic', 'Iconic', 'Bollywood', 'Dacoit'],
    reviews: [
      { user: 'FilmBuff_Raj', rating: 5, text: 'Kitne aadmi the? A timeless classic that still gives goosebumps. Gabbar is the greatest villain in Indian cinema!', date: '12 Jan 2024' },
      { user: 'CinemaLover', rating: 5, text: 'Watched it with my dad, now watching with my kids. Three generations and still magical.', date: '3 Mar 2024' },
    ],
  },
  {
    id: '2', title: '3 Idiots', year: 2009, rating: 8.4, duration: '2h 50m',
    genre: ['Comedy', 'Drama'], language: 'Hindi',
    keywords: ['bollywood', 'hindi', 'indian', 'college', 'aamir khan'],
    description: 'Two friends search for their long-lost companion while recalling the good times in college and the life lessons they learned from their unconventional friend Rancho.',
    poster: 'https://image.tmdb.org/t/p/w780/66A9MqXOyVFCssoloscw79z8Tew.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/8gT3UKtglLVpu0YfccwbmXZ5Eis.jpg',
    cast: [
      { name: 'Aamir Khan', role: 'Rancho', photo: 'https://image.tmdb.org/t/p/original/iCBtJHaCmdashFEaFOyO0gSteJk.jpg' },
      { name: 'R. Madhavan', role: 'Farhan', photo: 'https://image.tmdb.org/t/p/original/gaDrAdXxIrbBRCd9cX8YvJDEuLb.jpg' },
      { name: 'Kareena Kapoor', role: 'Pia', photo: 'https://image.tmdb.org/t/p/original/pJZJJ93NwJq3kb3RWtaZBYVga1x.jpg' },
    ],
    director: 'Rajkumar Hirani', tags: ['Feel-Good', 'College', 'Friendship', 'Bollywood'],
    reviews: [
      { user: 'EngineerKid', rating: 5, text: 'As an engineering student, this hit different. "All is well" is literally my life motto now.', date: '5 Feb 2024' },
      { user: 'MovieManiac21', rating: 4, text: 'Aamir Khan at his absolute best. The climax scene still makes me cry every single time.', date: '20 Mar 2024' },
    ],
  },
  {
    id: '3', title: 'Dangal', year: 2016, rating: 8.3, duration: '2h 41m',
    genre: ['Biography', 'Drama', 'Sport'], language: 'Hindi',
    keywords: ['Bollywood', 'Hindi', 'Indian', 'Wrestling', 'Sports', 'Aamir Khan'],
    description: 'The true story of wrestler Mahavir Singh Phogat who trains his daughters Geeta and Babita to become world-class wrestlers against all social odds.',
    poster: 'https://image.tmdb.org/t/p/original/3n8888uKuaxPBBuDUqJhfhrWlgA.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/5qjbu7po6eqLNd4kUPAyIpFRwQK.jpg',
    cast: [
      { name: 'Aamir Khan', role: 'Mahavir Singh Phogat', photo: 'https://image.tmdb.org/t/p/original/iCBtJHaCmdashFEaFOyO0gSteJk.jpg' },
      { name: 'Fatima Sana Shaikh', role: 'Geeta Phogat', photo: 'https://image.tmdb.org/t/p/original/zjudQC7RMeDUmUQbia544u77vYU.jpg' },
    ],
    director: 'Nitesh Tiwari', tags: ['Inspiring', 'Sports', 'True Story', 'Bollywood'],
    reviews: [
      { user: 'SportsLover', rating: 5, text: 'Cried like a baby in the finale. Aamir transformed physically and emotionally. What a masterpiece.', date: '8 Jan 2024' },
    ],
  },
  {
    id: '9', title: 'Dhurandhar', year: 2025, rating: 8.6, duration: '2h 45m',
    genre: ['Action', 'Thriller', 'Spy'], language: 'Hindi',
    keywords: ['bollywood', 'hindi', 'indian', 'ranveer singh', 'spy', 'patriotic'],
    description: 'An undercover Indian intelligence agent infiltrates criminal syndicates to dismantle a devastating terror network. India\'s highest grossing film of 2025.',
    poster: 'https://image.tmdb.org/t/p/original/snBOuXDdhmTvlzMUvP9Em3Pp1u1.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/snYOXem8pUGOffnLbbGq4aB1pg4.jpg',
    cast: [
      { name: 'Ranveer Singh', role: 'Agent Dhruv', photo: 'https://image.tmdb.org/t/p/original/sRiwLmhduFghJo8U2coUafnDD4C.jpg' },
      { name: 'R. Madhavan', role: 'Antagonist', photo: 'https://image.tmdb.org/t/p/original/gaDrAdXxIrbBRCd9cX8YvJDEuLb.jpg' },
    ],
    director: 'Aditya Dhar', tags: ['Spy', 'Patriotic', '2025', 'Bollywood'],
    reviews: [
      { user: 'SpyThriller_Fan', rating: 5, text: 'Ranveer Singh in a serious spy role — nobody saw this coming and he absolutely nailed it. Film of the year!', date: '20 Jun 2025' },
    ],
  },
  {
    id: '10', title: 'Chhaava', year: 2025, rating: 8.5, duration: '2h 40m',
    genre: ['Action', 'Drama', 'History'], language: 'Hindi',
    keywords: ['bollywood', 'hindi', 'indian', 'historical', 'maratha', 'vicky kaushal'],
    description: 'After Shivaji Maharaj\'s death, warrior-king Sambhaji Maharaj battles Mughal forces led by Aurangzeb to keep the Maratha Empire alive at all costs.',
    poster: 'https://image.tmdb.org/t/p/original/eD6s6LHOIrLMcarJtcRwn0EQXKA.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/s37s21YPqS7txyB0x0TRel24vgi.jpg',
    cast: [
      { name: 'Vicky Kaushal', role: 'Sambhaji Maharaj', photo: 'https://image.tmdb.org/t/p/original/kAEnBobX34y8NJ9qs1IVG42htQb.jpg' },
      { name: 'Rashmika Mandanna', role: 'Yesubai', photo: 'https://image.tmdb.org/t/p/original/c1wQq0OAzU9nFhGYn4iOoi7dmqD.jpg' },
    ],
    director: 'Laxman Utekar', tags: ['Historical', 'Maratha', 'Epic', 'Bollywood'],
    reviews: [
      { user: 'HistoryBuff', rating: 5, text: 'Vicky Kaushal as Sambhaji is career-defining. The battle sequences are goosebump-inducing.', date: '15 Feb 2025' },
    ],
  },
  {
    id: '29', title: 'URI: The Surgical Strike', year: 2019, rating: 8.2, duration: '2h 18m',
    genre: ['Action', 'Drama', 'War'], language: 'Hindi',
    keywords: ['bollywood', 'hindi', 'indian', 'army', 'patriotic', 'vicky kaushal', 'surgical strike'],
    description: 'Indian Army soldiers carry out a covert operation in retaliation for an attack on an army base in Uri, Jammu & Kashmir.',
    poster: 'https://image.tmdb.org/t/p/original/m1PpQrxS7PmT5p8MUOzyDOxlWCp.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/byB5eBTQepTAaAYHq5QbLLU9iTS.jpg',
    cast: [
      { name: 'Vicky Kaushal', role: 'Major Vihaan Shergill', photo: 'https://image.tmdb.org/t/p/original/kAEnBobX34y8NJ9qs1IVG42htQb.jpg' },
    ],
    director: 'Aditya Dhar', tags: ['Patriotic', 'War', 'Army', 'Bollywood'],
    reviews: [
      { user: 'ProudSoldier', rating: 5, text: '"How\'s the josh?" HIGH SIR! Vicky Kaushal made this role iconic. Salute to the real heroes.', date: '7 Jan 2024' },
    ],
  },
  {
    id: 'h1', title: 'Mughal-E-Azam', year: 1960, rating: 8.1, duration: '3h 37m',
    genre: ['Drama', 'History', 'Romance'], language: 'Hindi',
    keywords: ['bollywood', 'hindi', 'classic', 'historical', 'mughal', 'black and white'],
    description: 'Prince Salim falls in love with a court dancer Anarkali, leading to a legendary conflict with his emperor father Akbar.',
    poster: 'https://image.tmdb.org/t/p/original/lKfNZUh9CRp1EHjxgNGtrbvm55.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/1U4V92gwVDnVjWJn6eMciOffClN.jpg',
    cast: [
      { name: 'Dilip Kumar', role: 'Prince Salim', photo: 'https://image.tmdb.org/t/p/original/4qnST3lxsD0kPHCbxfDgmcBDSuC.jpg' },
      { name: 'Madhubala', role: 'Anarkali', photo: 'https://image.tmdb.org/t/p/original/ecSEgLwbSvmHaM2vYu2vgEg0oaD.jpg' },
    ],
    director: 'K. Asif', tags: ['Classic', 'Period Drama', 'Bollywood', 'Epic'],
    reviews: [
      { user: 'ClassicCinemaFan', rating: 5, text: 'Madhubala was ethereal. The Sheesh Mahal sequence is cinema at its most magnificent.', date: '10 Jan 2024' },
    ],
  },
  {
    id: 'h2', title: 'Lagaan', year: 2001, rating: 8.1, duration: '3h 44m',
    genre: ['Drama', 'Sport', 'History'], language: 'Hindi',
    keywords: ['bollywood', 'hindi', 'indian', 'cricket', 'british raj', 'aamir khan', 'oscar'],
    description: 'Villagers in 1890s India bet their freedom on a cricket match against their British colonizers to avoid paying crushing land taxes.',
    poster: 'https://image.tmdb.org/t/p/original/yNX9lFRAFeNLNRIXdqZK9gYrYKa.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/zpMl7IMN28OD54CjXNHhdgzTyMt.jpg',
    cast: [
      { name: 'Aamir Khan', role: 'Bhuvan', photo: 'https://image.tmdb.org/t/p/original/iCBtJHaCmdashFEaFOyO0gSteJk.jpg' },
    ],
    director: 'Ashutosh Gowariker', tags: ['Oscar Nominated', 'Cricket', 'Colonial India', 'Bollywood'],
    reviews: [
      { user: 'OscarWatcher', rating: 5, text: 'Oscar-nominated for a reason. The climactic cricket match is the most thrilling sequence in Bollywood history.', date: '4 Apr 2024' },
    ],
  },
  {
    id: 'h3', title: 'Dilwale Dulhania Le Jayenge', year: 1995, rating: 7.9, duration: '3h 9m',
    genre: ['Romance', 'Drama', 'Comedy'], language: 'Hindi',
    keywords: ['bollywood', 'hindi', 'romance', 'ddlj', 'shah rukh khan', 'kajol'],
    description: 'Two NRI youngsters fall in love on a Europe trip but must fight family traditions when Simran\'s father insists she marry someone else.',
    poster: 'https://image.tmdb.org/t/p/original/zfva7kgLDF3bkTwirxCNWruCnFh.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/rRs4eLjEuUHEVZl0BW4qRckbB4X.jpg',
    cast: [
      { name: 'Shah Rukh Khan', role: 'Raj', photo: 'https://image.tmdb.org/t/p/original/d8jQehnCiGuLhZbs1DyB2uDu5BA.jpg' },
      { name: 'Kajol', role: 'Simran', photo: 'https://image.tmdb.org/t/p/original/oKfhKaYCBXCab9ibh0F4JzPSczT.jpg' },
    ],
    director: 'Aditya Chopra', tags: ['Romance', 'Classic', 'Bollywood', 'DDLJ'],
    reviews: [
      { user: 'RomanceQueen', rating: 5, text: 'Bade bade deshon mein... SRK and Kajol\'s chemistry is pure magic. Still gives butterflies.', date: '14 Feb 2024' },
    ],
  },
  {
    id: 'h4', title: 'Gangs of Wasseypur', year: 2012, rating: 8.2, duration: '5h 21m',
    genre: ['Crime', 'Drama', 'Action'], language: 'Hindi',
    keywords: ['bollywood', 'hindi', 'crime', 'anurag kashyap', 'coal mafia', 'gangster'],
    description: 'A saga of revenge, power, and coal mafia spanning three generations of criminals in Dhanbad, Bihar. Anurag Kashyap\'s magnum opus.',
    poster: 'https://image.tmdb.org/t/p/original/xAy208Znkingmfnb5ZbULwLyIwW.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/zPsubje2FyqfIm6Ox9kSNqFYV61.jpg',
    cast: [
      { name: 'Manoj Bajpayee', role: 'Shahid Khan', photo: 'https://image.tmdb.org/t/p/original/dpBBwF4A2v1pptcv3PxdZqeS8qI.jpg' },
      { name: 'Nawazuddin Siddiqui', role: 'Faizal Khan', photo: 'https://image.tmdb.org/t/p/original/w1eXF7T60QlEC2gNfr99J3n8CgX.jpg' },
    ],
    director: 'Anurag Kashyap', tags: ['Crime Epic', 'Cult', 'Bollywood', 'Coal Mafia'],
    reviews: [
      { user: 'IndieFilmLover', rating: 5, text: 'India\'s answer to The Godfather. Nawazuddin is absolutely terrifying and brilliant. A landmark.', date: '22 Feb 2024' },
    ],
  },
  {
    id: 'h5', title: 'Andhadhun', year: 2018, rating: 8.3, duration: '2h 19m',
    genre: ['Thriller', 'Crime', 'Comedy'], language: 'Hindi',
    keywords: ['bollywood', 'hindi', 'thriller', 'blind pianist', 'sriram raghavan'],
    description: 'A blind pianist accidentally witnesses a murder and becomes entangled in a twisted web of lies, deceit, and unexpected twists.',
    poster: 'https://image.tmdb.org/t/p/original/m1oCZBNpiWae2DEQmKDb5IzdqM5.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/wJLV2ygHhTHG0nRTXlvA6wS8ubL.jpg',
    cast: [
      { name: 'Ayushmann Khurrana', role: 'Akash', photo: 'https://image.tmdb.org/t/p/original/qbdclvnDkJxPX7OQqmMY7w9ekBP.jpg' },
      { name: 'Tabu', role: 'Simi', photo: 'https://image.tmdb.org/t/p/original/cvt5nvCHr1ICf5u8A2mlzLQ8LsV.jpg' },
    ],
    director: 'Sriram Raghavan', tags: ['Thriller', 'Twist', 'Dark Comedy', 'Bollywood'],
    reviews: [
      { user: 'ThrillerAddict', rating: 5, text: 'Every 10 minutes the story flips on its head. Tabu is diabolically brilliant. What a ride!', date: '18 Mar 2024' },
    ],
  },
  {
    id: 'h6', title: 'Zindagi Na Milegi Dobara', year: 2011, rating: 7.7, duration: '2h 35m',
    genre: ['Drama', 'Comedy', 'Adventure'], language: 'Hindi',
    keywords: ['bollywood', 'hindi', 'friendship', 'spain', 'travel', 'life', 'hrithik roshan'],
    description: 'Three childhood friends embark on a bachelor trip through Spain, confronting their deepest fears and rediscovering themselves along the way.',
    poster: 'https://image.tmdb.org/t/p/original/j8sE9Ogeifh5Pk89eo5zRgOwGaX.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/8Tp16mMtGJSzlQxHcL17dUx8CtN.jpg',
    cast: [
      { name: 'Hrithik Roshan', role: 'Arjun', photo: 'https://image.tmdb.org/t/p/original/upKrdABAMK7jZevWAoPYI24iKlR.jpg' },
      { name: 'Farhan Akhtar', role: 'Imran', photo: 'https://image.tmdb.org/t/p/original/nYx5T3tkghBPvmI29J2iJlZOFyV.jpg' },
    ],
    director: 'Zoya Akhtar', tags: ['Travel', 'Feel-Good', 'Friendship', 'Bollywood'],
    reviews: [
      { user: 'TravelBug', rating: 4, text: 'Made me want to drop everything and go to Spain. The diving and skydiving sequences are breathtaking.', date: '2 Feb 2024' },
    ],
  },
  {
    id: 'h7', title: 'Dil Chahta Hai', year: 2001, rating: 7.8, duration: '2h 59m',
    genre: ['Comedy', 'Drama', 'Romance'], language: 'Hindi',
    keywords: ['bollywood', 'hindi', 'friendship', 'youth', 'goa', 'aamir khan'],
    description: 'Three inseparable friends navigate love, life, and growing up in Mumbai. A film that defined a generation of young Indians.',
    poster: 'https://image.tmdb.org/t/p/original/c6Cicaf2FFmfcInfsbPTxMLk5CS.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/fJ3k4ctIvIyeQxyNhUWZaLwKeP5.jpg',
    cast: [
      { name: 'Aamir Khan', role: 'Akash', photo: 'https://image.tmdb.org/t/p/original/iCBtJHaCmdashFEaFOyO0gSteJk.jpg' },
      { name: 'Saif Ali Khan', role: 'Sameer', photo: 'https://image.tmdb.org/t/p/original/85uKiFDEcIqzLh0GwqYvecXw4uA.jpg' },
    ],
    director: 'Farhan Akhtar', tags: ['Youth', 'Friendship', 'Goa', 'Bollywood'],
    reviews: [
      { user: 'NostalgiaTrip', rating: 5, text: 'The friendship in this film is what we all want in real life. Still watch it every year.', date: '5 Mar 2024' },
    ],
  },
  {
    id: 'h8', title: 'Taare Zameen Par', year: 2007, rating: 8.4, duration: '2h 42m',
    genre: ['Drama'], language: 'Hindi',
    keywords: ['bollywood', 'hindi', 'dyslexia', 'child', 'aamir khan', 'education'],
    description: 'An 8-year-old dyslexic child is misunderstood by everyone until a caring teacher recognizes his struggles and helps him discover his incredible artistic talent.',
    poster: 'https://image.tmdb.org/t/p/original/pRkd0DUqCDbqD9EnqleM4Wtc8v0.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/pRkd0DUqCDbqD9EnqleM4Wtc8v0.jpg',
    cast: [
      { name: 'Aamir Khan', role: 'Ram Shankar Nikumbh', photo: 'https://image.tmdb.org/t/p/original/iCBtJHaCmdashFEaFOyO0gSteJk.jpg' },
      { name: 'Darsheel Safary', role: 'Ishaan Awasthi', photo: 'https://image.tmdb.org/t/p/original/kX8iIIpscJvAflEIkPAh1euIWrS.jpg' },
    ],
    director: 'Aamir Khan', tags: ['Emotional', 'Child', 'Education', 'Bollywood'],
    reviews: [
      { user: 'TeacherSoul', rating: 5, text: 'I sobbed for 20 minutes. Every parent and teacher must watch this. Darsheel is extraordinary.', date: '17 Jan 2024' },
    ],
  },
  {
    id: 'h9', title: 'Kabhi Khushi Kabhie Gham', year: 2001, rating: 7.4, duration: '3h 30m',
    genre: ['Drama', 'Romance', 'Family'], language: 'Hindi',
    keywords: ['bollywood', 'hindi', 'family', 'srk', 'hrithik', 'karan johar'],
    description: 'A family saga exploring wealth, tradition, and love as a son tries to reunite his estranged parents in this iconic Karan Johar film.',
    poster: 'https://image.tmdb.org/t/p/original/12BvYKueY0eruZuTYIextEZaCC.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/sPMBiyjTco4JdKojlfGIz5Wd0jC.jpg',
    cast: [
      { name: 'Amitabh Bachchan', role: 'Yashvardhan Raichand', photo: 'https://image.tmdb.org/t/p/original/yAvq3EG5W5WaegZHB7gNdlM2KED.jpg' },
      { name: 'Shah Rukh Khan', role: 'Rahul', photo: 'https://image.tmdb.org/t/p/original/d8jQehnCiGuLhZbs1DyB2uDu5BA.jpg' },
      { name: 'Hrithik Roshan', role: 'Rohan', photo: 'https://image.tmdb.org/t/p/original/upKrdABAMK7jZevWAoPYI24iKlR.jpg' },
    ],
    director: 'Karan Johar', tags: ['Family Drama', 'Iconic', 'Emotional', 'Bollywood'],
    reviews: [
      { user: 'FamilyMovieFan', rating: 5, text: 'It\'s all about loving your parents. The London scenes and title song are iconic forever.', date: '25 Dec 2023' },
    ],
  },
  {
    id: 'h10', title: 'Padmaavat', year: 2018, rating: 7.2, duration: '2h 44m',
    genre: ['Action', 'Drama', 'History'], language: 'Hindi',
    keywords: ['bollywood', 'hindi', 'historical', 'rajput', 'ranveer singh', 'deepika'],
    description: 'Rajput queen Padmavati\'s legend and honor are challenged when the ruthless Sultan Alauddin Khilji becomes obsessed with her.',
    poster: 'https://image.tmdb.org/t/p/original/5kk71s8Vmvt8XQOojevhTA5QcB0.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/nfkEtT7dFSXhgAXATyZT2B357KU.jpg',
    cast: [
      { name: 'Ranveer Singh', role: 'Alauddin Khilji', photo: 'https://image.tmdb.org/t/p/original/sRiwLmhduFghJo8U2coUafnDD4C.jpg' },
      { name: 'Deepika Padukone', role: 'Padmavati', photo: 'https://image.tmdb.org/t/p/original/vjWFDUOz0yzVgXbahUmzxXvJhg2.jpg' },
    ],
    director: 'Sanjay Leela Bhansali', tags: ['Rajput', 'Epic', 'Bhansali', 'Bollywood'],
    reviews: [
      { user: 'EpicFilmLover', rating: 4, text: 'Ranveer Singh is terrifyingly brilliant as Khilji. Bhansali\'s visuals are simply unmatched.', date: '6 Feb 2024' },
    ],
  },
  {
    id: 'h11', title: 'PK', year: 2014, rating: 8.1, duration: '2h 33m',
    genre: ['Comedy', 'Drama', 'Sci-Fi'], language: 'Hindi',
    keywords: ['bollywood', 'hindi', 'aamir khan', 'alien', 'religion', 'satire'],
    description: 'An alien stranded on Earth is helped by a journalist as he questions religious practices and the concept of God in a satirical comedy.',
    poster: 'https://image.tmdb.org/t/p/original/uqoAHhuKZnWxzXbXSUycgpLPmUW.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/7DLVWOKnEgD1RZZV9F2ZeHhmpFY.jpg',
    cast: [
      { name: 'Aamir Khan', role: 'PK', photo: 'https://image.tmdb.org/t/p/original/iCBtJHaCmdashFEaFOyO0gSteJk.jpg' },
      { name: 'Anushka Sharma', role: 'Jaggu', photo: 'https://image.tmdb.org/t/p/original/fPhX9mefBzco5ntQUZNJZG56Gbi.jpg' },
    ],
    director: 'Rajkumar Hirani', tags: ['Satire', 'Comedy', 'Social', 'Bollywood'],
    reviews: [
      { user: 'SatireFan', rating: 5, text: 'Brave, hilarious, and thought-provoking. Aamir Khan is out of this world. Literally.', date: '9 Jan 2024' },
    ],
  },
  {
    id: 'h12', title: 'Gully Boy', year: 2019, rating: 7.9, duration: '2h 34m',
    genre: ['Drama', 'Music'], language: 'Hindi',
    keywords: ['bollywood', 'hindi', 'rap', 'hip-hop', 'mumbai', 'ranveer singh'],
    description: 'A street rapper from the Dharavi slums of Mumbai fights poverty and family pressure to find his voice and make it big in the underground rap scene.',
    poster: 'https://image.tmdb.org/t/p/original/h57EzPdrDvtUkvbTj6ar5yZOPic.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/gcZbciueHH7WmD03GcVZX7LYqmR.jpg',
    cast: [
      { name: 'Ranveer Singh', role: 'Murad', photo:'https://image.tmdb.org/t/p/original/sRiwLmhduFghJo8U2coUafnDD4C.jpg' },
      { name: 'Alia Bhatt', role: 'Safeena', photo: 'https://image.tmdb.org/t/p/original/5ExhI6FGvT9rviIpPKkExFAkxbb.jpg' },
    ],
    director: 'Zoya Akhtar', tags: ['Hip-Hop', 'Street', 'Music', 'Bollywood'],
    reviews: [
      { user: 'RapFanIndia', rating: 5, text: 'Apna Time Aayega is not just a song — it\'s a movement. Ranveer is raw and unfiltered greatness.', date: '14 Mar 2024' },
    ],
  },
  {
    id: 'h13', title: 'Barfi!', year: 2012, rating: 8.1, duration: '2h 31m',
    genre: ['Comedy', 'Drama', 'Romance'], language: 'Hindi',
    keywords: ['bollywood', 'hindi', 'deaf mute', 'ranbir kapoor', 'priyanka chopra'],
    description: 'A deaf-mute young man charms and loves two very different women in 1970s Darjeeling in this heartwarming and visually stunning film.',
    poster: 'https://image.tmdb.org/t/p/original/8lVuWmArvr41CvyvpgI3elD5iB1.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/dVUBKQMehxVnEQMpcOPw3OQqNMF.jpg',
    cast: [
      { name: 'Ranbir Kapoor', role: 'Barfi', photo: 'https://image.tmdb.org/t/p/original/ymYNHV9luwgyrw17NXHqbOWTQkg.jpg' },
      { name: 'Priyanka Chopra', role: 'Jhilmil', photo: 'https://image.tmdb.org/t/p/original/sdzcS82B0VAcKkMU5Lf1TQapDen.jpg' },
    ],
    director: 'Anurag Basu', tags: ['Heartwarming', 'Darjeeling', 'Silent Comedy', 'Bollywood'],
    reviews: [
      { user: 'HeartwarmingFilms', rating: 5, text: 'Ranbir Kapoor in the best performance of his career. Priyanka\'s autism portrayal is incredible.', date: '3 Feb 2024' },
    ],
  },
  {
    id: 'h14', title: 'Queen', year: 2014, rating: 8.1, duration: '2h 26m',
    genre: ['Drama', 'Comedy'], language: 'Hindi',
    keywords: ['bollywood', 'hindi', 'woman', 'solo travel', 'kangana ranaut', 'europe'],
    description: 'A Delhi girl goes on her honeymoon alone after her fiancé calls off their wedding, and discovers herself in Paris and Amsterdam.',
    poster: 'https://image.tmdb.org/t/p/original/ofsBY6DSiEOFDpyS7Bk7Zw32ch2.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/80o9QMsKOqULTcnQGumwlZrlnBW.jpg',
    cast: [
      { name: 'Kangana Ranaut', role: 'Rani', photo: 'https://image.tmdb.org/t/p/original/pS81jzDpO2tp6lBXPV561RqcuEl.jpg' },
    ],
    director: 'Vikas Bahl', tags: ['Empowerment', 'Solo Travel', 'Woman', 'Bollywood'],
    reviews: [
      { user: 'IndependentWoman', rating: 5, text: 'Kangana is phenomenal. This film is for every woman who has been told she can\'t do it alone.', date: '8 Mar 2024' },
    ],
  },
  {
    id: 'h15', title: 'Paan Singh Tomar', year: 2012, rating: 8.2, duration: '2h 14m',
    genre: ['Biography', 'Crime', 'Drama'], language: 'Hindi',
    keywords: ['bollywood', 'hindi', 'sports', 'bandit', 'irrfan khan', 'true story'],
    description: 'The true story of a national athlete who becomes a dacoit after he is failed by the system. Irrfan Khan\'s career-defining performance.',
    poster: 'https://image.tmdb.org/t/p/original/ii2KMVvGmcmJrqwYcT5nKn92bD5.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/5d0bSvsQaHm7lOMcEnbSLzjYirn.jpg',
    cast: [
      { name: 'Irrfan Khan', role: 'Paan Singh Tomar', photo: 'https://image.tmdb.org/t/p/original/qkA9PpWJRw3rNjVkWfNZdwLvRZx.jpg' },
    ],
    director: 'Tigmanshu Dhulia', tags: ['True Story', 'Irrfan', 'Dacoit', 'Bollywood'],
    reviews: [
      { user: 'IrrfanFan', rating: 5, text: 'Irrfan Khan is absolutely magnetic. "Baaghi toh sher hota hai" — one of cinema\'s greatest lines.', date: '11 Apr 2024' },
    ],
  },
  {
    id: 'h16', title: 'Article 370', year: 2024, rating: 7.8, duration: '2h 39m',
    genre: ['Action', 'Thriller', 'Drama'], language: 'Hindi',
    keywords: ['bollywood', 'hindi', 'kashmir', 'political', 'yami gautam', '2024'],
    description: 'The dramatic story of the revocation of Article 370 in Jammu & Kashmir, following a covert intelligence officer who plays a key role in the operation.',
    poster: 'https://image.tmdb.org/t/p/original/83sHfUSpyE6QGvgT2ieXbYHXIwJ.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/ixX3aPr4rcCYFM0UsAH81T4eZ0e.jpg',
    cast: [
      { name: 'Yami Gautam', role: 'Zooni Haksar', photo: 'https://image.tmdb.org/t/p/original/wQwYuofypdW7JnglmyFbeWKu33j.jpg' },
    ],
    director: 'Aditya Suhas Jambhale', tags: ['Political', 'Kashmir', 'Thriller', 'Bollywood'],
    reviews: [
      { user: 'PoliticalDrama', rating: 4, text: 'Yami Gautam delivers a career-best performance. Gripping political thriller that feels real.', date: '26 Mar 2024' },
    ],
  },
  {
    id: 'h17', title: 'Tumbbad', year: 2018, rating: 8.3, duration: '1h 44m',
    genre: ['Horror', 'Thriller', 'Fantasy'], language: 'Hindi',
    keywords: ['bollywood', 'hindi', 'horror', 'folk horror', 'supernatural', 'greed'],
    description: 'A myth about the first god of the universe becomes an obsession for a family across generations, leading them to a buried treasure guarded by a terrifying creature.',
    poster: 'https://image.tmdb.org/t/p/original/5Q3Iz5YaGZVnvk3tjDDrW71iaym.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/gyzj63JZnCtL8Jf8V0EjseP6tIn.jpg',
    cast: [
      { name: 'Sohum Shah', role: 'Vinayak Rao', photo: 'https://image.tmdb.org/t/p/original/5B7hSdq9hWEICHVxZtiL2ekwpzx.jpg' },
    ],
    director: 'Rahi Anil Barve', tags: ['Folk Horror', 'Cult', 'Masterpiece', 'Bollywood'],
    reviews: [
      { user: 'HorrorIndia', rating: 5, text: 'The most visually rich Indian film of the decade. A masterpiece on greed and mythology. Watch it!', date: '31 Oct 2023' },
    ],
  },
  {
    id: 'h18', title: 'Swades', year: 2004, rating: 8.2, duration: '3h 27m',
    genre: ['Drama'], language: 'Hindi',
    keywords: ['bollywood', 'hindi', 'shah rukh khan', 'nasa', 'village', 'patriotism'],
    description: 'An NRI NASA scientist returns to India to bring his elderly nanny to the US, but gets drawn into improving his native village instead.',
    poster: 'https://image.tmdb.org/t/p/original/n3fvnYAOU4pNKrXUay6RutC91N6.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/AmRfsOyEXpVhnaYXZMoDlZd9Siq.jpg',
    cast: [
      { name: 'Shah Rukh Khan', role: 'Mohan Bhargava', photo: 'https://image.tmdb.org/t/p/original/d8jQehnCiGuLhZbs1DyB2uDu5BA.jpg' },
    ],
    director: 'Ashutosh Gowariker', tags: ['Patriotism', 'Village', 'SRK', 'Bollywood'],
    reviews: [
      { user: 'IndiaLover', rating: 5, text: 'SRK\'s most underrated masterpiece. "Yeh Tara Woh Tara" is the most beautiful patriotic song ever made.', date: '15 Aug 2023' },
    ],
  },
  {
    id: 'h19', title: 'Mard Ko Dard Nahi Hota', year: 2018, rating: 7.4, duration: '2h 14m',
    genre: ['Action', 'Comedy'], language: 'Hindi',
    keywords: ['bollywood', 'hindi', 'martial arts', 'congenital insensitivity to pain', 'quirky'],
    description: 'A young man with a rare condition that makes him insensitive to pain becomes a martial arts fighter, inspired by his late grandfather\'s story.',
    poster: 'https://image.tmdb.org/t/p/original/lxHYXswJjaT5k0hPOMmNDRz1EjI.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/6nxaYDCOVNdOOAxO1kljascCliN.jpg',
    cast: [
      { name: 'Abhimanyu Dassani', role: 'Surya', photo: 'https://image.tmdb.org/t/p/original/mmHssWxJy9kUFB17ECNo2QynLA8.jpg' },
    ],
    director: 'Vasan Bala', tags: ['Action Comedy', 'Quirky', 'Cult', 'Bollywood'],
    reviews: [
      { user: 'ActionComedyFan', rating: 4, text: 'So unique, so fun. The fight sequences are jaw-dropping and the humour is perfect.', date: '3 Apr 2024' },
    ],
  },

  // ─── TELUGU / TOLLYWOOD (12 movies) ──────────────────────────────────
  {
    id: '4', title: 'Baahubali 2: The Conclusion', year: 2017, rating: 8.2, duration: '2h 47m',
    genre: ['Action', 'Drama', 'Fantasy'], language: 'Telugu',
    keywords: ['tollywood', 'telugu', 'indian', 'south indian', 'prabhas', 'rajamouli'],
    description: 'When Shiva learns about his true heritage, he vows to avenge the death of his legendary father Baahubali in this grand epic conclusion.',
    poster: 'https://image.tmdb.org/t/p/original/21sC2assImQIYCEDA84Qh9d1RsK.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/yGk5RLnWX53Jve7HHVCNQaLF28h.jpg',
    cast: [
      { name: 'Prabhas', role: 'Baahubali / Shiva', photo: 'https://image.tmdb.org/t/p/original/6naZ3oybdCtfggc5pTrcBDxOXrP.jpg' },
      { name: 'Rana Daggubati', role: 'Bhallaladeva', photo: 'https://image.tmdb.org/t/p/original/dCQE1CoWWc6RoXUTxOKjAXO8KDr.jpg' },
    ],
    director: 'S. S. Rajamouli', tags: ['Epic', 'Mythology', 'Blockbuster', 'South Indian'],
    reviews: [
      { user: 'EpicFan_Kiran', rating: 5, text: 'Why Kattappa killed Baahubali kept me awake for days. The reveal was worth every moment!', date: '2 Feb 2024' },
    ],
  },
  {
    id: '6', title: 'RRR', year: 2022, rating: 7.8, duration: '3h 7m',
    genre: ['Action', 'Drama', 'History'], language: 'Telugu',
    keywords: ['tollywood', 'telugu', 'south indian', 'indian', 'rajamouli', 'rrr', 'naatu naatu'],
    description: 'A fictional story about two legendary Indian revolutionaries and their journey together before they began fighting for their country in the 1920s.',
    poster: 'https://image.tmdb.org/t/p/original/wE0I6efAW4cDDmZQWtwZMOW44EJ.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/i0Y0wP8H6SRgjr6QmuwbtQbS24D.jpg',
    cast: [
      { name: 'N. T. Rama Rao Jr.', role: 'Komaram Bheem', photo: 'https://image.tmdb.org/t/p/original/vIVgB0mNbTtwBzf5xz633JE4Qfp.jpg' },
      { name: 'Ram Charan', role: 'Alluri Sitarama Raju', photo: 'https://image.tmdb.org/t/p/original/mNQA0qYtLeemo7mljd9RlG9jUMR.jpg' },
    ],
    director: 'S. S. Rajamouli', tags: ['Revolutionary', 'Epic', 'Patriotic', 'South Indian'],
    reviews: [
      { user: 'GlobalFan', rating: 5, text: 'Naatu Naatu deserved that Oscar. This film made me so proud of Indian cinema worldwide.', date: '5 Jan 2024' },
    ],
  },
  {
    id: '8', title: 'Pushpa 2: The Rule', year: 2024, rating: 7.8, duration: '3h 23m',
    genre: ['Action', 'Crime', 'Drama'], language: 'Telugu',
    keywords: ['tollywood', 'telugu', 'south indian', 'indian', 'allu arjun', 'pushpa'],
    description: 'Pushpa Raj expands his red sandalwood smuggling empire while a ruthless cop vows to bring him down at any cost.',
    poster: 'https://image.tmdb.org/t/p/original/t5ePZYRibJ0EEK1FK3GhihVkDW5.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/7jGItf7idJsBm9QTNoTNTU3KiGe.jpg',
    cast: [
      { name: 'Allu Arjun', role: 'Pushpa Raj', photo: 'https://image.tmdb.org/t/p/original/kZ8sliadIFNmToMCtIduLgXXqsS.jpg' },
      { name: 'Fahadh Faasil', role: 'Bhanwar Singh Shekawat', photo: 'https://image.tmdb.org/t/p/original/wmkwZWFHqMptqdt4HacMIAe8OBP.jpg' },
    ],
    director: 'Sukumar', tags: ['Mass', 'Action', 'Blockbuster', 'South Indian'],
    reviews: [
      { user: 'PushpaFever', rating: 5, text: 'Jhukega nahi sala! Allu Arjun\'s swag is unmatched. Bigger and bolder than the first.', date: '28 Dec 2023' },
    ],
  },
  {
    id: '30', title: 'Kalki 2898 AD', year: 2024, rating: 7.1, duration: '3h 1m',
    genre: ['Action', 'Sci-Fi', 'Fantasy'], language: 'Telugu',
    keywords: ['tollywood', 'telugu', 'south indian', 'indian', 'sci-fi', 'mythology', 'prabhas'],
    description: 'In a dystopian future, ancient Vedic prophecy and modern technology collide as a bounty hunter becomes entangled in the battle for humanity\'s survival.',
    poster: 'https://image.tmdb.org/t/p/original/ppkIXUj96xmr2BKELahi0EfRarE.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/nxEnY2vJpkh2SMpYrz6EskxpI7U.jpg',
    cast: [
      { name: 'Prabhas', role: 'Bhairava', photo: 'https://image.tmdb.org/t/p/original/6naZ3oybdCtfggc5pTrcBDxOXrP.jpg' },
      { name: 'Amitabh Bachchan', role: 'Ashwatthama', photo: 'https://image.tmdb.org/t/p/original/yAvq3EG5W5WaegZHB7gNdlM2KED.jpg' },
    ],
    director: 'Nag Ashwin', tags: ['Sci-Fi', 'Mythology', 'Futuristic', 'South Indian'],
    reviews: [
      { user: 'SciFiIndia', rating: 4, text: 'Indian cinema finally made a proper sci-fi epic. Amitabh as Ashwatthama is mythical casting.', date: '28 Jun 2024' },
    ],
  },
  {
    id: 't1', title: 'Arjun Reddy', year: 2017, rating: 8.1, duration: '3h 5m',
    genre: ['Drama', 'Romance'], language: 'Telugu',
    keywords: ['tollywood', 'telugu', 'south indian', 'vijay deverakonda', 'love story'],
    description: 'A brilliant but self-destructive doctor spirals into addiction after his college love is forced to marry someone else.',
    poster: 'https://image.tmdb.org/t/p/original/kHubDgL59I5hCn7ccBYvU7bKY1r.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/rhPJSfpy7s0x9jQPCGkqD2kvXAC.jpg',
    cast: [
      { name: 'Vijay Deverakonda', role: 'Arjun Reddy', photo: 'https://image.tmdb.org/t/p/original/gQ9PMGH43qtiX3GYHEHig6gLd9E.jpg' },
    ],
    director: 'Sandeep Reddy Vanga', tags: ['Intense', 'Love Story', 'Raw', 'South Indian'],
    reviews: [
      { user: 'IntenseDrama', rating: 5, text: 'Vijay Deverakonda was born for this role. Raw, flawed, and deeply human. Unforgettable.', date: '20 Jan 2024' },
    ],
  },
  {
    id: 't2', title: 'Ala Vaikunthapurramuloo', year: 2020, rating: 7.7, duration: '2h 56m',
    genre: ['Action', 'Comedy', 'Drama'], language: 'Telugu',
    keywords: ['tollywood', 'telugu', 'south indian', 'allu arjun', 'family drama'],
    description: 'A man raised by a poor father discovers his real father is a billionaire and must navigate class, identity, and family secrets.',
    poster: 'https://image.tmdb.org/t/p/original/goVGxWzvxs8oMNJ1Zc0QmfJlIzs.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/2ZwRzUaoro0qYOi0KX3ZDT0U9kc.jpg',
    cast: [
      { name: 'Allu Arjun', role: 'Bantu', photo: 'https://image.tmdb.org/t/p/original/kZ8sliadIFNmToMCtIduLgXXqsS.jpg' },
    ],
    director: 'Trivikram Srinivas', tags: ['Family', 'Masala', 'Entertainment', 'South Indian'],
    reviews: [
      { user: 'TeluguFan', rating: 4, text: 'Butta Bomma alone is worth the watch. Allu Arjun\'s charm is on another level here.', date: '3 Mar 2024' },
    ],
  },
  {
    id: 't3', title: 'Maharaja', year: 2024, rating: 7.9, duration: '2h 50m',
    genre: ['Action', 'Thriller'], language: 'Telugu',
    keywords: ['tollywood', 'telugu', 'south indian', 'mahesh babu', '2024'],
    description: 'A devoted father descends into a world of crime and vengeance when his daughter\'s safety is threatened by a powerful criminal network.',
    poster: 'https://image.tmdb.org/t/p/original/8eskhUMxw2gct79ofIU9Tc3WszL.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/if61bpqSXngkGoGNjMdHZt02wZS.jpg',
    cast: [
      { name: 'Vijay', role: 'Maharaja', photo: 'https://image.tmdb.org/t/p/original/7fragn88rli7iKZLT3aRubtBxml.jpg' },
    ],
    director: 'Nithin Reddiar', tags: ['Action', 'South Indian', '2024', 'Thriller'],
    reviews: [
      { user: 'TeluguFanatic', rating: 4, text: 'Gripping from start to finish. The screenplay is tight and the action is top notch.', date: '14 Jun 2024' },
    ],
  },
  {
    id: 't4', title: 'Baahubali: The Beginning', year: 2015, rating: 8.0, duration: '2h 38m',
    genre: ['Action', 'Drama', 'Fantasy'], language: 'Telugu',
    keywords: ['tollywood', 'telugu', 'south indian', 'prabhas', 'rajamouli', 'epic'],
    description: 'A young man raised in a tribal community discovers his extraordinary destiny and sets out to uncover his mysterious heritage as a legendary warrior king.',
    poster: 'https://image.tmdb.org/t/p/original/9BAjt8nSSms62uOVYn1t3C3dVto.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/e9ZEuHGHZ06AToHlfN1L7nejJ7W.jpg',
    cast: [
      { name: 'Prabhas', role: 'Shiva / Baahubali', photo: 'https://image.tmdb.org/t/p/original/6naZ3oybdCtfggc5pTrcBDxOXrP.jpg' },
      { name: 'Rana Daggubati', role: 'Bhallaladeva', photo: 'https://image.tmdb.org/t/p/original/dCQE1CoWWc6RoXUTxOKjAXO8KDr.jpg' },
    ],
    director: 'S. S. Rajamouli', tags: ['Epic', 'Mythology', 'Part 1', 'South Indian'],
    reviews: [
      { user: 'EpicMovieFan', rating: 5, text: 'The waterfall climb alone made this film immortal. Rajamouli is truly a visionary genius.', date: '10 Jan 2024' },
    ],
  },
  {
    id: 't5', title: 'Pushpa: The Rise', year: 2021, rating: 7.6, duration: '2h 59m',
    genre: ['Action', 'Crime', 'Drama'], language: 'Telugu',
    keywords: ['tollywood', 'telugu', 'south indian', 'allu arjun', 'red sandalwood', 'pushpa'],
    description: 'A lorry driver rises through the red sandalwood smuggling syndicate with sheer grit and intelligence, becoming a feared name in the criminal underworld.',
    poster: 'https://image.tmdb.org/t/p/original/r1yAzVQNbCbPTbB3GZFour9Qr0t.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/xFbWiSJwZhbAd8FTDbtWE67rJxU.jpg',
    cast: [
      { name: 'Allu Arjun', role: 'Pushpa Raj', photo: 'https://image.tmdb.org/t/p/original/kZ8sliadIFNmToMCtIduLgXXqsS.jpg' },
    ],
    director: 'Sukumar', tags: ['Mass', 'Rise', 'Smuggling', 'South Indian'],
    reviews: [
      { user: 'AlluArjunFan', rating: 4, text: 'Allu Arjun invented a new kind of swag with Pushpa. Iconic character, iconic film.', date: '5 Dec 2023' },
    ],
  },
  {
    id: 't6', title: 'Pokiri', year: 2006, rating: 8.0, duration: '2h 36m',
    genre: ['Action', 'Crime', 'Thriller'], language: 'Telugu',
    keywords: ['tollywood', 'telugu', 'south indian', 'mahesh babu', 'undercover'],
    description: 'A loner with a mysterious past turns out to be an undercover cop assigned to take down a massive criminal syndicate from within.',
    poster: 'https://image.tmdb.org/t/p/original/rQ8NH5f3CxRrmqZWMZNYPwLmjDS.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/dFkOqBox2qasTmp9H6B6IVGd8uO.jpg',
    cast: [
      { name: 'Mahesh Babu', role: 'Pandu', photo: 'https://image.tmdb.org/t/p/original/iPtltZvBsFBvPnAZ3W5RXGvefLi.jpg' },
    ],
    director: 'Puri Jagannadh', tags: ['Undercover', 'Mass', 'Action', 'South Indian'],
    reviews: [
      { user: 'MaheshFan', rating: 5, text: 'Mahesh Babu at his absolute best. The interval scene is cinema magic. A timeless Telugu classic.', date: '17 Feb 2024' },
    ],
  },
  {
    id: 't7', title: 'Sye Raa Narasimha Reddy', year: 2019, rating: 7.2, duration: '2h 49m',
    genre: ['Action', 'History', 'Drama'], language: 'Telugu',
    keywords: ['tollywood', 'telugu', 'south indian', 'chiranjeevi', 'freedom fighter'],
    description: 'The legendary untold story of Uyyalawada Narasimha Reddy, a freedom fighter who took up arms against the British long before 1857.',
    poster: 'https://image.tmdb.org/t/p/original/uEheujJysophwGaqHWPu1UCPthl.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/fy5Ea8h75FZX1q9F03lScxnE1Wf.jpg',
    cast: [
      { name: 'Chiranjeevi', role: 'Uyyalawada Narasimha Reddy', photo: 'https://image.tmdb.org/t/p/original/2jEVGMyXUbYrlo8804ExWz7QXs0.jpg' },
      { name: 'Amitabh Bachchan', role: 'Gosayi Venkanna', photo: 'https://image.tmdb.org/t/p/original/yAvq3EG5W5WaegZHB7gNdlM2KED.jpg' },
    ],
    director: 'Surender Reddy', tags: ['Freedom Fighter', 'Historical', 'Epic', 'South Indian'],
    reviews: [
      { user: 'HistoryFan', rating: 4, text: 'Chiranjeevi is majestic. A forgotten hero finally gets his story told on a grand scale.', date: '2 Jan 2024' },
    ],
  },
  {
    id: 't8', title: 'Devara: Part 1', year: 2024, rating: 7.0, duration: '2h 56m',
    genre: ['Action', 'Thriller', 'Drama'], language: 'Telugu',
    keywords: ['tollywood', 'telugu', 'south indian', 'jr ntr', '2024'],
    description: 'A feared coastal lord faces betrayal from within, while his son grapples with his father\'s terrifying legacy in this action-packed saga.',
    poster: 'https://image.tmdb.org/t/p/original/qHDjcUan72yLVstVt1WYmZc0yHP.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/hAQnXxOwCjgYcKRgTdYPRC8neqL.jpg',
    cast: [
      { name: 'N. T. Rama Rao Jr.', role: 'Devara / Vara', photo: 'https://image.tmdb.org/t/p/original/vIVgB0mNbTtwBzf5xz633JE4Qfp.jpg' },
    ],
    director: 'Koratala Siva', tags: ['Mass', 'Coastal', 'Part 1', 'South Indian'],
    reviews: [
      { user: 'NTRFan', rating: 4, text: 'Jr. NTR is menacing and brilliant in the dual role. The sea sequence is unforgettable.', date: '28 Sep 2024' },
    ],
  },

  // ─── KANNADA (5 movies) ───────────────────────────────────────────────
  {
    id: '5', title: 'KGF: Chapter 2', year: 2022, rating: 8.2, duration: '2h 48m',
    genre: ['Action', 'Drama', 'Crime'], language: 'Kannada',
    keywords: ['kannada', 'south indian', 'indian', 'yash', 'kgf'],
    description: 'Rocky\'s fearsome reputation grows as he tightens his grip on the Kolar Gold Fields. New threats emerge from all directions in this explosive sequel.',
    poster: 'https://image.tmdb.org/t/p/original/au6Nq6kVr9NFICzpmYtMSyDA3Gi.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/cY4ytkF1ZbHbn1s4P7RpsRLN9yQ.jpg',
    cast: [
      { name: 'Yash', role: 'Rocky / Raja Krishnappa Bairya', photo: 'https://image.tmdb.org/t/p/original/es8St0vl9otL1XAAZJKYmNpL3Wy.jpg' },
      { name: 'Sanjay Dutt', role: 'Adheera', photo: 'https://image.tmdb.org/t/p/original/70viNBvKHpX1kMZcfIwULqWnfdM.jpg' },
    ],
    director: 'Prashanth Neel', tags: ['Mass', 'Blockbuster', 'Power', 'South Indian'],
    reviews: [
      { user: 'YashArmy', rating: 5, text: 'Rocky Bhai is unstoppable. The climax scene gave me chills for days.', date: '10 Mar 2024' },
    ],
  },
  {
    id: '7', title: 'Kantara', year: 2022, rating: 8.5, duration: '2h 30m',
    genre: ['Action', 'Drama', 'Mystery'], language: 'Kannada',
    keywords: ['kannada', 'south indian', 'indian', 'rishab shetty', 'folk', 'mystical'],
    description: 'A rebellious man in a remote Coastal Karnataka village clashes with a forest officer, with the region\'s mystical traditions at the center of everything.',
    poster: 'https://image.tmdb.org/t/p/original/jIsKmkxMzdCZ0Ux1GVSnu8m6Na6.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/968ca173BujCW9OVO7BobzwMVtd.jpg',
    cast: [
      { name: 'Rishab Shetty', role: 'Shiva', photo: 'https://image.tmdb.org/t/p/original/eRaOUg2B02XH1l6P4juGzaPDr3u.jpg' },
    ],
    director: 'Rishab Shetty', tags: ['Mystical', 'Folk', 'Cult', 'South Indian'],
    reviews: [
      { user: 'KarnatakaFan', rating: 5, text: 'The climax gave me goosebumps I cannot even describe. Rishab Shetty is a national treasure.', date: '9 Jan 2024' },
    ],
  },
  {
    id: 'k1', title: 'KGF: Chapter 1', year: 2018, rating: 8.2, duration: '2h 36m',
    genre: ['Action', 'Drama', 'Crime'], language: 'Kannada',
    keywords: ['kannada', 'south indian', 'indian', 'yash', 'kgf', 'gold mine'],
    description: 'An orphan becomes the most feared man in the Kolar Gold Fields through sheer willpower, fighting his way up from the slums of Bombay.',
    poster: 'https://image.tmdb.org/t/p/original/ltHlJwvxKv7d0ooCiKSAvfwV9tX.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/n0z49k6qSB9QilogdbMHblUSZxp.jpg',
    cast: [
      { name: 'Yash', role: 'Rocky', photo: 'https://image.tmdb.org/t/p/original/es8St0vl9otL1XAAZJKYmNpL3Wy.jpg' },
    ],
    director: 'Prashanth Neel', tags: ['Origin Story', 'Gold Mine', 'Rise', 'South Indian'],
    reviews: [
      { user: 'KGFFan', rating: 5, text: 'The origin story of Rocky Bhai. The pre-interval sequence is one of the greatest in Indian cinema.', date: '22 Jan 2024' },
    ],
  },
  {
    id: 'k2', title: 'Ugramm', year: 2014, rating: 7.8, duration: '2h 27m',
    genre: ['Action', 'Crime', 'Thriller'], language: 'Kannada',
    keywords: ['kannada', 'south indian', 'prashanth neel', 'villain', 'mass'],
    description: 'A ruthless man is hired to eliminate a dangerous criminal, but what unfolds is far more complex than a simple job.',
    poster: 'https://image.tmdb.org/t/p/original/aCngvkUoPtl8uEEoBAa9EQbopx6.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/2RHKfO5oDU9PXOj2amTeAuu1vdE.jpg',
    cast: [
      { name: 'Srimurali', role: 'Ugramm Shiva', photo: 'https://image.tmdb.org/t/p/original/t4dYxD8tVbZIADMDUjOG3t6j1nq.jpg' },
    ],
    director: 'Prashanth Neel', tags: ['Violent', 'Raw', 'Cult', 'South Indian'],
    reviews: [
      { user: 'PrashantheNeilFan', rating: 4, text: 'Where Prashanth Neel\'s signature style was born. Srimurali is phenomenal. Underrated gem.', date: '4 Jan 2024' },
    ],
  },
  {
    id: 'k3', title: 'Vikrant Rona', year: 2022, rating: 6.8, duration: '2h 20m',
    genre: ['Action', 'Mystery', 'Thriller'], language: 'Kannada',
    keywords: ['kannada', 'south indian', 'kichcha sudeep', 'monster', 'mystery'],
    description: 'A new police officer arrives in a remote rainforest village where locals believe a deadly supernatural force is behind a series of mysterious deaths.',
    poster: 'https://image.tmdb.org/t/p/original/jq1yH1pT8VMZONLMTgOFUDgitNh.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/zjBotOQpewbtkxeG0YLugEft5NE.jpg',
    cast: [
      { name: 'Kichcha Sudeep', role: 'Vikrant Rona', photo: 'https://image.tmdb.org/t/p/original/8c5TYgGwbkcQkvC3ZlTU41OfYBN.jpg' },
    ],
    director: 'Anup Bhandari', tags: ['Mystery', 'Supernatural', 'Kannada', 'South Indian'],
    reviews: [
      { user: 'MysteryFan', rating: 3, text: 'Visually stunning but the story gets muddled. Sudeep\'s presence is commanding throughout.', date: '17 Aug 2022' },
    ],
  },

  // ─── TAMIL / KOLLYWOOD (8 movies) ────────────────────────────────────
  {
    id: '11', title: 'Vikram', year: 2022, rating: 8.4, duration: '2h 54m',
    genre: ['Action', 'Thriller', 'Crime'], language: 'Tamil',
    keywords: ['kollywood', 'tamil', 'south indian', 'indian', 'kamal haasan', 'lokesh'],
    description: 'A special agent is tasked with identifying the members of a black-ops team after a series of masked killings shake the state.',
    poster: 'https://image.tmdb.org/t/p/original/774UV1aCURb4s4JfEFg3IEMu5Zj.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/dkIX4dSMuVqjfrPGunBJUR7K3LQ.jpg',
    cast: [
      { name: 'Kamal Haasan', role: 'Vikram', photo: 'https://image.tmdb.org/t/p/original/17zscZgz4wOlGDd3Gziw4YbI3G.jpg' },
      { name: 'Fahadh Faasil', role: 'Santhanam', photo: 'https://image.tmdb.org/t/p/original/wmkwZWFHqMptqdt4HacMIAe8OBP.jpg' },
      { name: 'Vijay Sethupathi', role: 'Rolex', photo: 'https://image.tmdb.org/t/p/original/7fragn88rli7iKZLT3aRubtBxml.jpg' },
    ],
    director: 'Lokesh Kanagaraj', tags: ['Action Thriller', 'Lokesh Universe', 'Tamil', 'South Indian'],
    reviews: [
      { user: 'TamilCinemaFan', rating: 5, text: 'Vijay Sethupathi as Rolex is cinema\'s greatest villain introduction. Lokesh Kanagaraj is a god.', date: '7 Jul 2024' },
    ],
  },
  {
    id: 'tm1', title: 'Leo', year: 2023, rating: 7.5, duration: '2h 44m',
    genre: ['Action', 'Thriller', 'Crime'], language: 'Tamil',
    keywords: ['kollywood', 'tamil', 'south indian', 'thalapathy vijay', 'lokesh universe'],
    description: 'A mild-mannered café owner in the Himalayas is forced to confront his violent past when a dangerous criminal organization comes looking for him.',
    poster: 'https://image.tmdb.org/t/p/original/t1oAdt8JjUs4sHEBvE8fKtjV7er.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/p7EySjIFK086Jr9pp16EgRcheRT.jpg',
    cast: [
      { name: 'Vijay', role: 'Parthiban / Leo Das', photo: 'https://image.tmdb.org/t/p/original/iGveyp8DuSr3YHK7m6faOXTKrjN.jpg' },
    ],
    director: 'Lokesh Kanagaraj', tags: ['Lokesh Universe', 'Vijay', 'Action', 'South Indian'],
    reviews: [
      { user: 'VijayFan', rating: 4, text: 'The interval block is pure adrenaline. Vijay in beast mode — exactly what we wanted.', date: '21 Oct 2023' },
    ],
  },
  {
    id: 'tm2', title: 'Jailer', year: 2023, rating: 7.3, duration: '2h 48m',
    genre: ['Action', 'Drama', 'Crime'], language: 'Tamil',
    keywords: ['kollywood', 'tamil', 'south indian', 'rajinikanth', 'nelson dilipkumar'],
    description: 'A retired jailer comes out of retirement when his son is accused of running a drug cartel, and uncovers a massive conspiracy.',
    poster: 'https://image.tmdb.org/t/p/original/7mwxYW75lAQrMpYK7NWVcmwyF9T.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/ownDZBS9ecoPbWjW5V5L8jknGF.jpg',
    cast: [
      { name: 'Rajinikanth', role: 'Muthuvel Pandian', photo: 'https://image.tmdb.org/t/p/original/cQBcrXqcQPfXOQfNfgO3slJM2xi.jpg' },
    ],
    director: 'Nelson Dilipkumar', tags: ['Rajini', 'Mass', 'Entertainment', 'South Indian'],
    reviews: [
      { user: 'RajiniFan', rating: 4, text: 'THALAIVA! The watch exchange scene had the whole theatre screaming. Rajini is eternal.', date: '12 Aug 2023' },
    ],
  },
  {
    id: 'tm3', title: 'Kaithi', year: 2019, rating: 8.5, duration: '2h 25m',
    genre: ['Action', 'Thriller', 'Crime'], language: 'Tamil',
    keywords: ['kollywood', 'tamil', 'south indian', 'lokesh kanagaraj', 'one night', 'tense'],
    description: 'A prisoner released after 10 years tries to meet his daughter for the first time, but gets entangled in a deadly one-night battle against a drug cartel.',
    poster: 'https://image.tmdb.org/t/p/original/mxvOvom5zKRp4WPURKrhjoatt4P.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/AkO8hEXTTlaMt5tvSKNHwxrE9jt.jpg',
    cast: [
      { name: 'Karthi', role: 'Dilli', photo: 'https://image.tmdb.org/t/p/original/ycxl56NbjNkJZkYbUMdwGdnBIg7.jpg' },
    ],
    director: 'Lokesh Kanagaraj', tags: ['One Night', 'Tense', 'Action', 'South Indian'],
    reviews: [
      { user: 'ThrillerMaster', rating: 5, text: 'Non-stop tension for 2.5 hours. The truck sequence is legendary. Lokesh Kanagaraj is a genius.', date: '4 Nov 2023' },
    ],
  },
  {
    id: 'tm4', title: '96', year: 2018, rating: 8.5, duration: '2h 38m',
    genre: ['Drama', 'Romance'], language: 'Tamil',
    keywords: ['kollywood', 'tamil', 'south indian', 'vijay sethupathi', 'trisha', 'nostalgia'],
    description: 'Two school sweethearts meet after 22 years during a school reunion, and spend the night reminiscing about their past and the love they never expressed.',
    poster: 'https://image.tmdb.org/t/p/original/dYImzEquIZglfzDnJlHYdlUIeSo.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/3cAaj6Z56zYaagyoAi55CGx6oHg.jpg',
    cast: [
      { name: 'Vijay Sethupathi', role: 'Ram', photo: 'https://image.tmdb.org/t/p/original/7fragn88rli7iKZLT3aRubtBxml.jpg' },
      { name: 'Trisha', role: 'Janu', photo: 'https://image.tmdb.org/t/p/original/jfeAV0VeAQhKONzIv1UEYbklJGn.jpg' },
    ],
    director: 'C. Prem Kumar', tags: ['Nostalgia', 'Poetic', 'Pure Love', 'South Indian'],
    reviews: [
      { user: 'PureRomance', rating: 5, text: 'The most beautifully restrained love story ever told in Indian cinema. Just sublime.', date: '16 Feb 2024' },
    ],
  },
  {
    id: 'tm5', title: 'Pariyerum Perumal', year: 2018, rating: 8.6, duration: '2h 27m',
    genre: ['Drama', 'Crime'], language: 'Tamil',
    keywords: ['kollywood', 'tamil', 'south indian', 'caste', 'social', 'pa. ranjith'],
    description: 'A first-generation law student faces caste-based discrimination and violence while falling in love in this searing social drama.',
    poster: 'https://image.tmdb.org/t/p/original/78YoIO3gzkZPC1jotfDmolNDmgT.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/78YoIO3gzkZPC1jotfDmolNDmgT.jpg',
    cast: [
      { name: 'Kathir', role: 'Pariyerum Perumal', photo: 'https://image.tmdb.org/t/p/original/cQNlW5ztPIANrUNRos81cxZuZe5.jpg' },
    ],
    director: 'Mari Selvaraj', tags: ['Social', 'Caste Discrimination', 'Powerful', 'South Indian'],
    reviews: [
      { user: 'SocialDramaFan', rating: 5, text: 'A film that punched me in the gut and made me question everything. Essential Indian cinema.', date: '11 Mar 2024' },
    ],
  },
  {
    id: 'tm6', title: 'Roja', year: 1992, rating: 8.1, duration: '2h 32m',
    genre: ['Romance', 'Thriller', 'Drama'], language: 'Tamil',
    keywords: ['kollywood', 'tamil', 'south indian', 'mani ratnam', 'kashmir', 'ar rahman'],
    description: 'A young woman whose husband is kidnapped by Kashmiri militants fights desperately to secure his release in this landmark Mani Ratnam film.',
    poster: 'https://image.tmdb.org/t/p/original/1ZHr93dgcJ6jSAYpKISemBmYoIy.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/1ZHr93dgcJ6jSAYpKISemBmYoIy.jpg',
    cast: [
      { name: 'Arvind Swamy', role: 'Rishi Kumar', photo: 'https://image.tmdb.org/t/p/original/wtFT2TbMOcfoe6S3p0FL56E7yaJ.jpg' },
    ],
    director: 'Mani Ratnam', tags: ['Classic', 'Kashmir', 'A.R. Rahman', 'South Indian'],
    reviews: [
      { user: 'ClassicTamil', rating: 5, text: 'The film that launched A.R. Rahman to the world. Mani Ratnam\'s masterpiece is eternal.', date: '22 Mar 2024' },
    ],
  },

  // ─── MALAYALAM (3 movies) ─────────────────────────────────────────────
  {
    id: 'm1', title: 'Drishyam 2', year: 2021, rating: 8.4, duration: '2h 32m',
    genre: ['Thriller', 'Crime', 'Drama'], language: 'Malayalam',
    keywords: ['mollywood', 'malayalam', 'south indian', 'mohanlal', 'fahadh faasil', 'thriller'],
    description: 'Six years after the events of Drishyam, Georgekutty\'s past comes back to haunt him as the police launch a fresh investigation into the original case.',
    poster: 'https://image.tmdb.org/t/p/original/8RJBCUGE27LX06tAES4jTELN0KA.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/8RJBCUGE27LX06tAES4jTELN0KA.jpg',
    cast: [
      { name: 'Mohanlal', role: 'Georgekutty', photo: 'https://image.tmdb.org/t/p/original/4oQtVIfXVpQESBgkjI9j9v7jMkQ.jpg' },
    ],
    director: 'Jeethu Joseph', tags: ['Suspense', 'Family', 'Crime', 'South Indian'],
    reviews: [
      { user: 'ThrillerLover', rating: 5, text: 'Surpasses the original. Mohanlal\'s final scene will go down in cinematic history. Perfect.', date: '20 Feb 2024' },
    ],
  },
  {
    id: 'm2', title: 'Premam', year: 2015, rating: 8.3, duration: '2h 28m',
    genre: ['Romance', 'Drama', 'Comedy'], language: 'Malayalam',
    keywords: ['mollywood', 'malayalam', 'south indian', 'nivin pauly', 'coming of age', 'love'],
    description: 'A man\'s journey through three phases of love — from teenage crush to adult heartbreak to mature love — told with charm and depth.',
    poster: 'https://image.tmdb.org/t/p/original/1gqkECnOY2mFa8jma7Hu29LBwu0.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/1gqkECnOY2mFa8jma7Hu29LBwu0.jpg',
    cast: [
      { name: 'Nivin Pauly', role: 'George', photo: 'https://image.tmdb.org/t/p/original/v8duBiKG9cfOy3RX1cW6JnrLuDe.jpg' },
    ],
    director: 'Alphonse Puthren', tags: ['Coming of Age', 'Love', 'Charming', 'South Indian'],
    reviews: [
      { user: 'MalayalamLover', rating: 5, text: 'The most charming film Malayalam has ever made. The first love segment is pure magic.', date: '14 Feb 2024' },
    ],
  },
  {
    id: 'm3', title: 'Manjummel Boys', year: 2024, rating: 8.5, duration: '2h 17m',
    genre: ['Adventure', 'Thriller', 'Drama'], language: 'Malayalam',
    keywords: ['mollywood', 'malayalam', 'south indian', 'rescue', 'friendship', 'cave', '2024'],
    description: 'Based on the true story of a group of friends from Manjummel who risked everything to rescue their friend from a deadly cave in Kodaikanal.',
    poster: 'https://image.tmdb.org/t/p/original/bswrtewwthpsh6nABiqKevU4UBI.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/bswrtewwthpsh6nABiqKevU4UBI.jpg',
    cast: [
      { name: 'Soubin Shahir', role: 'Kuttan', photo: 'https://image.tmdb.org/t/p/original/eFMA1PFOpDtiJ5MlkSAMexvTPsl.jpg' },
    ],
    director: 'Chidambaram', tags: ['True Story', 'Rescue', 'Friendship', 'South Indian'],
    reviews: [
      { user: 'TrueStoryFan', rating: 5, text: 'The most tense survival film Indian cinema has made. I was holding my breath for 40 minutes.', date: '28 Feb 2024' },
    ],
  },

  // ─── ENGLISH / HOLLYWOOD (30 movies) ─────────────────────────────────
  {
    id: '12', title: 'The Dark Knight', year: 2008, rating: 9.0, duration: '2h 32m',
    genre: ['Action', 'Crime', 'Drama'], language: 'English',
    keywords: ['hollywood', 'english', 'batman', 'christopher nolan', 'joker', 'superhero'],
    description: 'Batman faces the Joker, a criminal mastermind who seeks to plunge Gotham City into anarchy while testing the hero\'s moral principles.',
    poster: 'https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    cast: [
      { name: 'Christian Bale', role: 'Batman / Bruce Wayne', photo: 'https://image.tmdb.org/t/p/original/gbcLQi7lQVaIF3WXNjW9Fqi84xZ.jpg' },
      { name: 'Heath Ledger', role: 'The Joker', photo: 'https://image.tmdb.org/t/p/original/p2z2bURSg7nuMsN9P2s61e2RvNz.jpg' },
    ],
    director: 'Christopher Nolan', tags: ['Masterpiece', 'Joker', 'Superhero', 'Hollywood'],
    reviews: [
      { user: 'NolanFan', rating: 5, text: 'Heath Ledger IS the Joker. The greatest superhero film ever made. Why so serious?', date: '1 Jan 2024' },
    ],
  },
  {
    id: '13', title: 'Inception', year: 2010, rating: 8.8, duration: '2h 28m',
    genre: ['Sci-Fi', 'Thriller', 'Action'], language: 'English',
    keywords: ['hollywood', 'english', 'christopher nolan', 'dreams', 'leo dicaprio'],
    description: 'A skilled thief who steals secrets through dream-sharing technology is given a chance to have his past erased if he can implant an idea into a target\'s mind.',
    poster: 'https://image.tmdb.org/t/p/original/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg',
    cast: [
      { name: 'Leonardo DiCaprio', role: 'Cobb', photo: 'https://image.tmdb.org/t/p/original/aLUFp0zWpLVyIOgY0scIpuuKZLE.jpg' },
    ],
    director: 'Christopher Nolan', tags: ['Mind-Bending', 'Heist', 'Dreams', 'Hollywood'],
    reviews: [
      { user: 'MindBlown', rating: 5, text: 'I\'ve watched this 7 times and I still discuss the ending. The greatest original sci-fi blockbuster.', date: '15 Jan 2024' },
    ],
  },
  {
    id: '14', title: 'Interstellar', year: 2014, rating: 8.6, duration: '2h 49m',
    genre: ['Sci-Fi', 'Drama', 'Adventure'], language: 'English',
    keywords: ['hollywood', 'english', 'christopher nolan', 'space', 'black hole', 'matthew mcconaughey'],
    description: 'A team of astronauts travel through a wormhole in search of a new home for humanity as Earth faces an extinction-level catastrophe.',
    poster: 'https://image.tmdb.org/t/p/original/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg',
    cast: [
      { name: 'Matthew McConaughey', role: 'Cooper', photo: 'https://image.tmdb.org/t/p/original/rUxLWWCDUF8RnDaocSqrVDJ2MS1.jpg' },
    ],
    director: 'Christopher Nolan', tags: ['Space', 'Emotional', 'Nolan', 'Hollywood'],
    reviews: [
      { user: 'SpaceLover', rating: 5, text: 'The docking scene to Hans Zimmer\'s score is the single greatest sequence in modern cinema.', date: '20 Feb 2024' },
    ],
  },
  {
    id: 'e1', title: 'The Shawshank Redemption', year: 1994, rating: 9.3, duration: '2h 22m',
    genre: ['Drama'], language: 'English',
    keywords: ['hollywood', 'english', 'prison', 'hope', 'stephen king', 'morgan freeman'],
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    poster: 'https://image.tmdb.org/t/p/original/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg',
    cast: [
      { name: 'Tim Robbins', role: 'Andy Dufresne', photo: 'https://image.tmdb.org/t/p/original/9DujxnBMVkizaeIyM0eXPMfXxR.jpg' },
      { name: 'Morgan Freeman', role: 'Red', photo: 'https://image.tmdb.org/t/p/original/jPsLqiYGSofU4s6BjrxnefMfabb.jpg' },
    ],
    director: 'Frank Darabont', tags: ['Hope', 'Prison', 'Masterpiece', 'Hollywood'],
    reviews: [
      { user: 'IMDbTop1Fan', rating: 5, text: 'The greatest film ever made. "Get busy living, or get busy dying." A true masterpiece.', date: '5 Jan 2024' },
    ],
  },
  {
    id: 'e2', title: 'The Godfather', year: 1972, rating: 9.2, duration: '2h 55m',
    genre: ['Crime', 'Drama'], language: 'English',
    keywords: ['hollywood', 'english', 'mafia', 'francis ford coppola', 'al pacino', 'marlon brando'],
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son in this iconic epic.',
    poster: 'https://image.tmdb.org/t/p/original/3Tf8vXykYhzHdT0BtsYTp570JGQ.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/3Tf8vXykYhzHdT0BtsYTp570JGQ.jpg',
    cast: [
      { name: 'Marlon Brando', role: 'Vito Corleone', photo: 'https://image.tmdb.org/t/p/original/vklkhX4QlRKnEG8ylhWzoBdcuev.jpg' },
      { name: 'Al Pacino', role: 'Michael Corleone', photo: 'https://image.tmdb.org/t/p/original/m8HAAjq1T75JypKk0v1FFQn4ysZ.jpg' },
    ],
    director: 'Francis Ford Coppola', tags: ['Mafia', 'Classic', 'Greatest', 'Hollywood'],
    reviews: [
      { user: 'ClassicFilmNerd', rating: 5, text: '"I\'m going to make him an offer he can\'t refuse." The benchmark of all crime cinema.', date: '8 Jan 2024' },
    ],
  },
  {
    id: 'e3', title: 'Pulp Fiction', year: 1994, rating: 8.9, duration: '2h 34m',
    genre: ['Crime', 'Drama', 'Thriller'], language: 'English',
    keywords: ['hollywood', 'english', 'quentin tarantino', 'nonlinear', 'samuel l jackson'],
    description: 'The lives of two mob hitmen, a boxer, and a pair of diner bandits intertwine in four tales of violence and redemption in this non-linear masterpiece.',
    poster: 'https://image.tmdb.org/t/p/original/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg',
    cast: [
      { name: 'John Travolta', role: 'Vincent Vega', photo: 'https://image.tmdb.org/t/p/original/ap8eEYfBKTLixmVVpRlq4NslDD5.jpg' },
      { name: 'Samuel L. Jackson', role: 'Jules Winnfield', photo: 'https://image.tmdb.org/t/p/original/AiAYAqwpM5xmiFrAIeQvUXDCVvo.jpg' },
    ],
    director: 'Quentin Tarantino', tags: ['Non-linear', 'Cult', 'Tarantino', 'Hollywood'],
    reviews: [
      { user: 'TarantinoFan', rating: 5, text: '"Ezekiel 25:17..." Still the coolest scene ever put on film. Tarantino reinvented cinema.', date: '12 Mar 2024' },
    ],
  },
  {
    id: 'e4', title: 'Oppenheimer', year: 2023, rating: 8.5, duration: '3h 0m',
    genre: ['Biography', 'Drama', 'History'], language: 'English',
    keywords: ['hollywood', 'english', 'christopher nolan', 'atomic bomb', 'oppenheimer', 'cillian murphy'],
    description: 'The story of American scientist J. Robert Oppenheimer and his pivotal role in developing the atomic bomb during World War II.',
    poster: 'https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
    cast: [
      { name: 'Cillian Murphy', role: 'J. Robert Oppenheimer', photo: 'https://image.tmdb.org/t/p/original/ycZpLjHxsNPvsB6ndu2D9qsx94X.jpg' },
    ],
    director: 'Christopher Nolan', tags: ['Oscar Winner', 'WWII', 'Nolan', 'Hollywood'],
    reviews: [
      { user: 'OscarFan', rating: 5, text: 'Cillian Murphy should have won 10 Oscars. The Trinity test sequence is genuinely terrifying.', date: '24 Mar 2024' },
    ],
  },
  {
    id: 'e5', title: 'The Avengers', year: 2012, rating: 8.0, duration: '2h 23m',
    genre: ['Action', 'Sci-Fi', 'Adventure'], language: 'English',
    keywords: ['hollywood', 'english', 'marvel', 'superhero', 'avengers', 'iron man', 'thor'],
    description: 'Earth\'s mightiest heroes must come together and learn to fight as a team to stop Loki and his alien army from enslaving humanity.',
    poster: 'https://image.tmdb.org/t/p/original/yHdPTs239Cqce1s6y9figbeolR1.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/yHdPTs239Cqce1s6y9figbeolR1.jpg',
    cast: [
      { name: 'Robert Downey Jr.', role: 'Iron Man / Tony Stark', photo: 'https://image.tmdb.org/t/p/original/4SLDzrd8C0evBJTy9nVbFeogjXV.jpg' },
    ],
    director: 'Joss Whedon', tags: ['Marvel', 'Team', 'Superhero', 'Hollywood'],
    reviews: [
      { user: 'MarvelFan', rating: 5, text: 'The movie that made superhero team-ups a thing. The Battle of New York is still thrilling.', date: '1 May 2024' },
    ],
  },
  {
    id: 'e6', title: 'Avengers: Endgame', year: 2019, rating: 8.4, duration: '3h 1m',
    genre: ['Action', 'Sci-Fi', 'Adventure'], language: 'English',
    keywords: ['hollywood', 'english', 'marvel', 'superhero', 'avengers', 'thanos', 'snap'],
    description: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the almighty Thanos before his blitz of devastation and ruin.',
    poster: 'https://image.tmdb.org/t/p/original/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg',
    cast: [
      { name: 'Robert Downey Jr.', role: 'Tony Stark / Iron Man', photo: 'https://image.tmdb.org/t/p/original/4SLDzrd8C0evBJTy9nVbFeogjXV.jpg' },
    ],
    director: 'Anthony and Joe Russo', tags: ['Marvel', 'Finale', 'Epic', 'Hollywood'],
    reviews: [
      { user: 'MCUFan', rating: 5, text: '"I am Iron Man." I cried three times. The greatest culmination in franchise history.', date: '26 Apr 2024' },
    ],
  },
  {
    id: 'e7', title: 'The Matrix', year: 1999, rating: 8.7, duration: '2h 16m',
    genre: ['Sci-Fi', 'Action', 'Thriller'], language: 'English',
    keywords: ['hollywood', 'english', 'wachowski', 'virtual reality', 'keanu reeves', 'bullet time'],
    description: 'A computer hacker learns the shocking truth about his reality and his role in the war against its controllers in this groundbreaking sci-fi film.',
    poster: 'https://image.tmdb.org/t/p/original/p96dm7sCMn4VYAStA6siNz30G1r.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/p96dm7sCMn4VYAStA6siNz30G1r.jpg',
    cast: [
      { name: 'Keanu Reeves', role: 'Neo / Thomas Anderson', photo: 'https://image.tmdb.org/t/p/original/8RZLOyYGsoRe9p44q3xin9QkMHv.jpg' },
    ],
    director: 'The Wachowskis', tags: ['Sci-Fi Classic', 'Red Pill', 'VFX', 'Hollywood'],
    reviews: [
      { user: 'SciFiNerd', rating: 5, text: '"What is real?" The Matrix redefined action cinema and posed the deepest philosophical questions.', date: '10 Apr 2024' },
    ],
  },
  {
    id: 'e8', title: 'Gladiator', year: 2000, rating: 8.5, duration: '2h 35m',
    genre: ['Action', 'Drama', 'History'], language: 'English',
    keywords: ['hollywood', 'english', 'ridley scott', 'roman empire', 'russell crowe', 'gladiator'],
    description: 'A former Roman general turned slave becomes a gladiator and seeks revenge against the corrupt emperor who murdered his family.',
    poster: 'https://image.tmdb.org/t/p/original/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/wN2xWp1eIwCKOD0BHTcErTBv1Uq.jpg',
    cast: [
      { name: 'Russell Crowe', role: 'Maximus', photo: 'https://image.tmdb.org/t/p/original/mGTtPuwE8OR00tkJGmVLJmt8KpW.jpg' },
    ],
    director: 'Ridley Scott', tags: ['Roman', 'Epic', 'Oscar Winner', 'Hollywood'],
    reviews: [
      { user: 'EpicFilmFan', rating: 5, text: '"Are you not entertained?!" Russell Crowe is perfection. The Colosseum sequences are still unbeatable.', date: '18 Mar 2024' },
    ],
  },
  {
    id: 'e9', title: 'Forrest Gump', year: 1994, rating: 8.8, duration: '2h 22m',
    genre: ['Drama', 'Romance', 'Comedy'], language: 'English',
    keywords: ['hollywood', 'english', 'tom hanks', 'robert zemeckis', 'life', 'america'],
    description: 'The life story of a man with low intelligence who nevertheless finds himself at the centre of key American historical events.',
    poster: 'https://image.tmdb.org/t/p/original/9wlYJy01XgvIhdf651FgyJkau07.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/9wlYJy01XgvIhdf651FgyJkau07.jpg',
    cast: [
      { name: 'Tom Hanks', role: 'Forrest Gump', photo: 'https://image.tmdb.org/t/p/original/xV5zba3TFMcs1ZS8lxmOlJ1S6Fo.jpg' },
    ],
    director: 'Robert Zemeckis', tags: ['Heartwarming', 'Tom Hanks', 'Oscar Winner', 'Hollywood'],
    reviews: [
      { user: 'TomHanksFan', rating: 5, text: '"Life is like a box of chocolates." This film contains every human emotion. A perfect film.', date: '6 Feb 2024' },
    ],
  },
  {
    id: 'e10', title: 'Schindler\'s List', year: 1993, rating: 9.0, duration: '3h 15m',
    genre: ['Biography', 'Drama', 'History'], language: 'English',
    keywords: ['hollywood', 'english', 'spielberg', 'holocaust', 'world war 2', 'oscar'],
    description: 'In German-occupied Poland during WWII, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
    poster: 'https://image.tmdb.org/t/p/original/doGEE2DgjET0XK0k9BozsMBES5H.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg',
    cast: [
      { name: 'Liam Neeson', role: 'Oskar Schindler', photo: 'https://image.tmdb.org/t/p/original/sRLev3wJioBgun3ZoeAUFpkLy0D.jpg' },
    ],
    director: 'Steven Spielberg', tags: ['Holocaust', 'Oscar Winner', 'Spielberg', 'Hollywood'],
    reviews: [
      { user: 'HistoryFilmFan', rating: 5, text: 'Watching this is an obligation to history. The girl in the red coat... I will never forget.', date: '27 Jan 2024' },
    ],
  },
  {
    id: 'e11', title: 'Fight Club', year: 1999, rating: 8.8, duration: '2h 19m',
    genre: ['Drama', 'Thriller'], language: 'English',
    keywords: ['hollywood', 'english', 'david fincher', 'brad pitt', 'edward norton', 'identity'],
    description: 'An insomniac office worker forms an underground fight club with a soap salesman in a story about masculinity, consumerism, and chaos.',
    poster: 'https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/wR5HZWdVpcXx9sevV1bQi7rP4op.jpg',
    cast: [
      { name: 'Brad Pitt', role: 'Tyler Durden', photo: 'https://image.tmdb.org/t/p/original/ajNaPmXVVMJFg9GWmu6MJzTaXdV.jpg' },
      { name: 'Edward Norton', role: 'The Narrator', photo: 'https://image.tmdb.org/t/p/original/nQy3rl4Ba0z7GCgZ1nVMYy2mM6p.jpg' },
    ],
    director: 'David Fincher', tags: ['Twist', 'Cult', 'Brad Pitt', 'Hollywood'],
    reviews: [
      { user: 'CultMovieFan', rating: 5, text: 'The first rule of Fight Club is you don\'t talk about Fight Club. The twist destroyed my mind.', date: '15 Feb 2024' },
    ],
  },
  {
    id: 'e12', title: 'Dune: Part One', year: 2021, rating: 8.0, duration: '2h 35m',
    genre: ['Sci-Fi', 'Adventure', 'Drama'], language: 'English',
    keywords: ['hollywood', 'english', 'denis villeneuve', 'space', 'timothee chalamet', 'desert'],
    description: 'A noble family becomes embroiled in a war for the most valuable substance in the universe — spice — on a dangerous desert planet.',
    poster: 'https://image.tmdb.org/t/p/original/gDzOcq0pfeCeqMBwKIJlSmQpjkZ.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/8hoD5BQuUV9dDecAbiyVIxLjzZ9.jpg',
    cast: [
      { name: 'Timothée Chalamet', role: 'Paul Atreides', photo: 'https://image.tmdb.org/t/p/original/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg' },
    ],
    director: 'Denis Villeneuve', tags: ['Epic', 'Space', 'Villeneuve', 'Hollywood'],
    reviews: [
      { user: 'SciFiEpicFan', rating: 5, text: 'Villeneuve created the most immersive sci-fi world since 2001. Hans Zimmer\'s score is transcendent.', date: '7 May 2024' },
    ],
  },
  {
    id: 'e13', title: 'Dune: Part Two', year: 2024, rating: 8.5, duration: '2h 46m',
    genre: ['Sci-Fi', 'Adventure', 'Drama'], language: 'English',
    keywords: ['hollywood', 'english', 'denis villeneuve', 'space', 'timothee chalamet', 'arrakis', '2024'],
    description: 'Paul Atreides unites with Chani and the Fremen, and seeks revenge against the conspirators who destroyed his family.',
    poster: 'https://image.tmdb.org/t/p/original/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
    cast: [
      { name: 'Timothée Chalamet', role: 'Paul Atreides', photo: 'https://image.tmdb.org/t/p/original/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg' },
      { name: 'Zendaya', role: 'Chani', photo: 'https://image.tmdb.org/t/p/original/9FPQ2LDgt6D251uwmuAft4477xO.jpg' },
    ],
    director: 'Denis Villeneuve', tags: ['Epic', 'Arrakis', '2024', 'Hollywood'],
    reviews: [
      { user: 'DuneFan2024', rating: 5, text: 'Surpasses Part One. The sandworm ride is the most visually stunning scene in a decade of cinema.', date: '5 Mar 2024' },
    ],
  },
  {
    id: 'e14', title: 'Joker', year: 2019, rating: 8.4, duration: '2h 2m',
    genre: ['Crime', 'Drama', 'Thriller'], language: 'English',
    keywords: ['hollywood', 'english', 'joker', 'joaquin phoenix', 'origin story', 'dc'],
    description: 'Failed comedian Arthur Fleck slowly descends into madness and becomes the Clown Prince of Crime in 1980s Gotham City.',
    poster: 'https://image.tmdb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/mZuAPY4ETMQPHhCXIcJ90kd6RaS.jpg',
    cast: [
      { name: 'Joaquin Phoenix', role: 'Arthur Fleck / Joker', photo: 'https://image.tmdb.org/t/p/original/u38k3hQBDwNX0VA22aQceDp9Iyv.jpg' },
    ],
    director: 'Todd Phillips', tags: ['Origin Story', 'Dark', 'Oscar Winner', 'Hollywood'],
    reviews: [
      { user: 'DarkFilmFan', rating: 5, text: 'Joaquin Phoenix disappears into Arthur Fleck. The staircase dance is pure iconic cinema.', date: '4 Apr 2024' },
    ],
  },
  {
    id: 'e15', title: 'Tenet', year: 2020, rating: 7.3, duration: '2h 30m',
    genre: ['Sci-Fi', 'Action', 'Thriller'], language: 'English',
    keywords: ['hollywood', 'english', 'christopher nolan', 'time inversion', 'spy'],
    description: 'A secret agent is recruited to prevent a mysterious organization from using time inversion to trigger World War III.',
    poster: 'https://image.tmdb.org/t/p/original/aCIFMriQh8rvhxpN1IWGgvH0Tlg.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/aCIFMriQh8rvhxpN1IWGgvH0Tlg.jpg',
    cast: [
      { name: 'John David Washington', role: 'The Protagonist', photo: 'https://image.tmdb.org/t/p/original/27C77ni5XmlgkJVbomXPC4tHWVd.jpg' },
    ],
    director: 'Christopher Nolan', tags: ['Time Inversion', 'Spy', 'Complex', 'Hollywood'],
    reviews: [
      { user: 'NolanObsessed', rating: 4, text: 'The most ambitious spy film ever made. Needs multiple viewings. The reverse-action sequences are insane.', date: '11 Jan 2024' },
    ],
  },
  {
    id: 'e16', title: 'No Country for Old Men', year: 2007, rating: 8.1, duration: '2h 2m',
    genre: ['Crime', 'Drama', 'Thriller'], language: 'English',
    keywords: ['hollywood', 'english', 'coen brothers', 'javier bardem', 'western', 'violence'],
    description: 'A hunter stumbles upon a drug deal gone wrong and takes the money, setting a remorseless killer on his trail in this neo-western thriller.',
    poster: 'https://image.tmdb.org/t/p/original/6d5XOczc226jECq0LIX0siKtgHR.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/6d5XOczc226jECq0LIX0siKtgHR.jpg',
    cast: [
      { name: 'Javier Bardem', role: 'Anton Chigurh', photo: 'https://image.tmdb.org/t/p/original/IShnFg6ijWhpbu29dFBd9PtqQg.jpg' },
    ],
    director: 'Coen Brothers', tags: ['Neo-Western', 'Suspense', 'Oscar Winner', 'Hollywood'],
    reviews: [
      { user: 'CoenBrosFan', rating: 5, text: 'Anton Chigurh is the most terrifying villain in film history. "What\'s the most you\'ve ever lost in a coin toss?"', date: '28 Jan 2024' },
    ],
  },
  {
    id: 'e17', title: 'Mad Max: Fury Road', year: 2015, rating: 8.1, duration: '2h 0m',
    genre: ['Action', 'Sci-Fi', 'Adventure'], language: 'English',
    keywords: ['hollywood', 'english', 'george miller', 'dystopian', 'charlize theron', 'action'],
    description: 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.',
    poster: 'https://image.tmdb.org/t/p/original/hA2ple9q4qnwxp3hKVNhroipsir.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/hA2ple9q4qnwxp3hKVNhroipsir.jpg',
    cast: [
      { name: 'Tom Hardy', role: 'Max Rockatansky', photo: 'https://image.tmdb.org/t/p/original/d81K0RH8UX7tZj49tZaQhZ9ewH.jpg' },
      { name: 'Charlize Theron', role: 'Furiosa', photo: 'https://image.tmdb.org/t/p/original/ie1KbeYFG5E0GVr1QP7tDNuXvga.jpg' },
    ],
    director: 'George Miller', tags: ['Dystopian', 'Action', 'Oscar Winner', 'Hollywood'],
    reviews: [
      { user: 'ActionMovieKing', rating: 5, text: '2 hours of pure, unadulterated action perfection. Furiosa is the greatest action hero of her generation.', date: '22 Feb 2024' },
    ],
  },
  {
    id: 'e18', title: 'The Prestige', year: 2006, rating: 8.5, duration: '2h 10m',
    genre: ['Drama', 'Mystery', 'Thriller'], language: 'English',
    keywords: ['hollywood', 'english', 'christopher nolan', 'magicians', 'obsession', 'twist'],
    description: 'Two rival magicians in Victorian London compete to create the ultimate stage illusion, destroying everything in their obsessive pursuit.',
    poster: 'https://image.tmdb.org/t/p/original/Ag2B2KHKQPukjH7WutmgnnSNurZ.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/Ag2B2KHKQPukjH7WutmgnnSNurZ.jpg',
    cast: [
      { name: 'Christian Bale', role: 'Alfred Borden', photo: 'https://image.tmdb.org/t/p/original/gbcLQi7lQVaIF3WXNjW9Fqi84xZ.jpg' },
      { name: 'Hugh Jackman', role: 'Robert Angier', photo: 'https://image.tmdb.org/t/p/original/oX6CpXmnXCHLyqsa4NEed1DZAKx.jpg' },
    ],
    director: 'Christopher Nolan', tags: ['Twist', 'Magician', 'Rivalry', 'Hollywood'],
    reviews: [
      { user: 'TwistMovieFan', rating: 5, text: 'The greatest magic trick in movie history. Every rewatch reveals something new. Pure genius.', date: '9 Mar 2024' },
    ],
  },
  {
    id: 'e19', title: 'Parasite', year: 2019, rating: 8.6, duration: '2h 12m',
    genre: ['Thriller', 'Drama', 'Comedy'], language: 'Korean',
    keywords: ['korean', 'south korea', 'bong joon-ho', 'class', 'oscar', 'parasite'],
    description: 'A poor family schemes to become employed by a wealthy family by infiltrating their household and posing as unrelated, highly qualified individuals.',
    poster: 'https://image.tmdb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    cast: [
      { name: 'Song Kang-ho', role: 'Ki-taek', photo: 'https://image.tmdb.org/t/p/original/kBM9UTPYXUA2RNk210DXhztLFns.jpg' },
    ],
    director: 'Bong Joon-ho', tags: ['Oscar Winner', 'Class Warfare', 'Brilliant', 'Korean'],
    reviews: [
      { user: 'KoreanFilmFan', rating: 5, text: 'The first non-English film to win Best Picture. Every scene is a masterclass. Bong Joon-ho is a genius.', date: '3 Feb 2024' },
    ],
  },
  {
    id: 'e20', title: 'Whiplash', year: 2014, rating: 8.5, duration: '1h 46m',
    genre: ['Drama', 'Music'], language: 'English',
    keywords: ['hollywood', 'english', 'damien chazelle', 'drumming', 'obsession', 'jk simmons'],
    description: 'A young jazz drummer is pushed to his breaking point by a ruthless, abusive instructor at a prestigious music conservatory.',
    poster: 'https://image.tmdb.org/t/p/original/7fn624j5lj3xTme2SgiLCeuedmO.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/7fn624j5lj3xTme2SgiLCeuedmO.jpg',
    cast: [
      { name: 'Miles Teller', role: 'Andrew Neiman', photo: 'https://image.tmdb.org/t/p/original/aciu7YM8fD0BzrrA6cJ5wDKZIA6.jpg' },
      { name: 'J. K. Simmons', role: 'Fletcher', photo: 'https://image.tmdb.org/t/p/original/ScmKoJ9eiSUOthAt1PDNLi8Fkw.jpg' },
    ],
    director: 'Damien Chazelle', tags: ['Music', 'Obsession', 'Intense', 'Hollywood'],
    reviews: [
      { user: 'MusicFilmFan', rating: 5, text: '"Not quite my tempo." The final scene is the most electrifying ending in modern cinema.', date: '19 Feb 2024' },
    ],
  },
  {
    id: 'e21', title: '1917', year: 2019, rating: 8.3, duration: '1h 59m',
    genre: ['War', 'Drama', 'Action'], language: 'English',
    keywords: ['hollywood', 'english', 'sam mendes', 'world war 1', 'one shot', 'golden globe'],
    description: 'Two British soldiers on the Western Front are given an impossible mission: deliver a message to stop 1,600 men from walking into a deadly trap.',
    poster: 'https://image.tmdb.org/t/p/original/iZf0KyrE25z1sage4SYFLCCrMi9.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/iZf0KyrE25z1sage4SYFLCCrMi9.jpg',
    cast: [
      { name: 'George MacKay', role: 'Schofield', photo: 'https://image.tmdb.org/t/p/original/xROmV7s8QtAIfhTUPhVl7qB0H2z.jpg' },
    ],
    director: 'Sam Mendes', tags: ['One Shot', 'WWI', 'Golden Globe', 'Hollywood'],
    reviews: [
      { user: 'WarFilmFan', rating: 5, text: 'The one-shot technique immerses you completely. The farmhouse scene with the singing soldier shattered me.', date: '14 Jan 2024' },
    ],
  },
  {
    id: 'e22', title: 'Killers of the Flower Moon', year: 2023, rating: 7.7, duration: '3h 26m',
    genre: ['Crime', 'Drama', 'History'], language: 'English',
    keywords: ['hollywood', 'english', 'martin scorsese', 'native american', 'osage', 'leo dicaprio'],
    description: 'Members of the Osage Nation are murdered under mysterious circumstances in the 1920s, sparking a major FBI investigation.',
    poster: 'https://image.tmdb.org/t/p/original/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg',
    cast: [
      { name: 'Leonardo DiCaprio', role: 'Ernest Burkhart', photo: 'https://image.tmdb.org/t/p/original/vo4fltT9zZ1kH8nhLetz8MED6jp.jpg' },
    ],
    director: 'Martin Scorsese', tags: ['Scorsese', 'Oscar', 'Native American', 'Hollywood'],
    reviews: [
      { user: 'ScorseseFan', rating: 4, text: 'Scorsese at age 80 making one of his best films. Lily Gladstone is absolutely devastating.', date: '20 Oct 2023' },
    ],
  },
  {
    id: 'e23', title: 'Everything Everywhere All at Once', year: 2022, rating: 7.9, duration: '2h 19m',
    genre: ['Action', 'Comedy', 'Sci-Fi'], language: 'English',
    keywords: ['hollywood', 'english', 'multiverse', 'oscar winner', 'michelle yeoh', 'a24'],
    description: 'A middle-aged Chinese-American immigrant is swept into an interdimensional adventure where she can tap into the skills of alternate versions of herself.',
    poster: 'https://image.tmdb.org/t/p/original/u68AjlvlutfEIcpmbYpKcdi09ut.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/u68AjlvlutfEIcpmbYpKcdi09ut.jpg',
    cast: [
      { name: 'Michelle Yeoh', role: 'Evelyn Wang', photo: 'https://image.tmdb.org/t/p/original/i6fHvGt7Rb8oVyjjdQVV6vEHB94.jpg' },
    ],
    director: 'Daniel Kwan & Daniel Scheinert', tags: ['Oscar Winner', 'Multiverse', 'A24', 'Hollywood'],
    reviews: [
      { user: 'A24Fan', rating: 5, text: 'The most creative film of the 2020s. Michelle Yeoh\'s Best Actress Oscar was long overdue.', date: '12 Mar 2024' },
    ],
  },

  // ─── KOREAN CINEMA (5 movies) ─────────────────────────────────────────
  {
    id: 'kr1', title: 'Oldboy', year: 2003, rating: 8.4, duration: '2h 0m',
    genre: ['Action', 'Mystery', 'Thriller'], language: 'Korean',
    keywords: ['korean', 'south korea', 'park chan-wook', 'revenge', 'mystery', 'corridor fight'],
    description: 'After being imprisoned in a cell for 15 years with no explanation, a man is suddenly released and given five days to find out why.',
    poster: 'https://image.tmdb.org/t/p/original/pWDtjs568ZfOTMbURQBYuT4Qxka.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/pWDtjs568ZfOTMbURQBYuT4Qxka.jpg',
    cast: [
      { name: 'Choi Min-sik', role: 'Oh Dae-su', photo: 'https://image.tmdb.org/t/p/original/sd7gIA6nEkq6zumkDCfxSE0YSSV.jpg' },
    ],
    director: 'Park Chan-wook', tags: ['Revenge', 'Shocking Twist', 'Cult', 'Korean'],
    reviews: [
      { user: 'KoreanCultFan', rating: 5, text: 'The corridor fight scene is the most innovative action in cinema. The twist... I still cannot process it.', date: '7 Mar 2024' },
    ],
  },
  {
    id: 'kr2', title: 'Train to Busan', year: 2016, rating: 7.6, duration: '1h 58m',
    genre: ['Action', 'Horror', 'Thriller'], language: 'Korean',
    keywords: ['korean', 'south korea', 'zombie', 'train', 'survival'],
    description: 'A man and his estranged daughter are trapped aboard a speeding train when a zombie outbreak overtakes South Korea.',
    poster: 'https://image.tmdb.org/t/p/original/vNVFt6dtcqnI7hqa6LFBUibuFiw.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/vNVFt6dtcqnI7hqa6LFBUibuFiw.jpg',
    cast: [
      { name: 'Gong Yoo', role: 'Seok-woo', photo: 'https://image.tmdb.org/t/p/original/ocGoFb6TrK3uWGXt4WnuibUG1vD.jpg' },
    ],
    director: 'Yeon Sang-ho', tags: ['Zombie', 'Survival', 'Emotional', 'Korean'],
    reviews: [
      { user: 'HorrorFan', rating: 5, text: 'The most emotionally devastating zombie film ever made. The father-daughter story had me sobbing.', date: '25 Jan 2024' },
    ],
  },
  {
    id: 'kr3', title: 'Memories of Murder', year: 2003, rating: 8.1, duration: '2h 12m',
    genre: ['Crime', 'Drama', 'Thriller'], language: 'Korean',
    keywords: ['korean', 'south korea', 'bong joon-ho', 'serial killer', 'detective', 'true story'],
    description: 'Based on South Korea\'s first serial murders, two detectives — one methodical, one impulsive — investigate a series of brutal killings in a rural province.',
    poster: 'https://image.tmdb.org/t/p/original/dsEoTJKM1s5OVDkS2P2JdoTxo4K.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/dsEoTJKM1s5OVDkS2P2JdoTxo4K.jpg',
    cast: [
      { name: 'Song Kang-ho', role: 'Park Doo-man', photo: 'https://image.tmdb.org/t/p/original/kBM9UTPYXUA2RNk210DXhztLFns.jpg' },
    ],
    director: 'Bong Joon-ho', tags: ['Serial Killer', 'True Story', 'Bong Joon-ho', 'Korean'],
    reviews: [
      { user: 'CrimeFilmFan', rating: 5, text: 'The greatest police procedural ever made. The final shot is haunting beyond belief.', date: '4 Mar 2024' },
    ],
  },
  {
    id: 'kr4', title: 'The Wailing', year: 2016, rating: 7.9, duration: '2h 36m',
    genre: ['Horror', 'Mystery', 'Thriller'], language: 'Korean',
    keywords: ['korean', 'south korea', 'na hong-jin', 'village', 'possession', 'demon'],
    description: 'A mysterious stranger arrives in a small rural Korean village, triggering a series of violent incidents and a terrifying supernatural mystery.',
    poster: 'https://image.tmdb.org/t/p/original/aXlL7yYwpXInhltamtzKQFBG08G.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/aXlL7yYwpXInhltamtzKQFBG08G.jpg',
    cast: [
      { name: 'Kwak Do-won', role: 'Jong-goo', photo: 'https://image.tmdb.org/t/p/original/kX31v6ZeiVBQtmhPRyZhoyWBonj.jpg' },
    ],
    director: 'Na Hong-jin', tags: ['Supernatural', 'Folk Horror', 'Unsettling', 'Korean'],
    reviews: [
      { user: 'HorrorAficionado', rating: 4, text: 'I haven\'t been the same since watching this. It defies explanation and stays with you forever.', date: '31 Oct 2023' },
    ],
  },
  {
    id: 'kr5', title: 'The Handmaiden', year: 2016, rating: 8.1, duration: '2h 25m',
    genre: ['Drama', 'Thriller', 'Romance'], language: 'Korean',
    keywords: ['korean', 'south korea', 'park chan-wook', 'con', 'erotic', 'japan', 'colonial'],
    description: 'A cunning pickpocket is hired to be the handmaiden of a Japanese heiress with a secret inheritance, but finds herself entangled in an elaborate con.',
    poster: 'https://image.tmdb.org/t/p/original/dLlH4aNHdnmf62umnInL8xPlPzw.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/dLlH4aNHdnmf62umnInL8xPlPzw.jpg',
    cast: [
      { name: 'Kim Min-hee', role: 'Lady Hideko', photo: 'https://image.tmdb.org/t/p/original/3MNC2vPOIjYzhATMslPV1dypOJs.jpg' },
    ],
    director: 'Park Chan-wook', tags: ['Twist', 'Art House', 'Lush', 'Korean'],
    reviews: [
      { user: 'ArtHouseFan', rating: 5, text: 'Ravishingly beautiful and endlessly clever. The plot twist midway completely reframes everything.', date: '8 Apr 2024' },
    ],
  },

  // ─── JAPANESE CINEMA (4 movies) ───────────────────────────────────────
  {
    id: 'jp1', title: 'Spirited Away', year: 2001, rating: 8.6, duration: '2h 5m',
    genre: ['Animation', 'Adventure', 'Fantasy'], language: 'Japanese',
    keywords: ['japanese', 'japan', 'studio ghibli', 'miyazaki', 'anime', 'oscar'],
    description: 'A sullen 10-year-old girl wanders into a world ruled by gods, witches, and monsters, and where humans are changed into beasts.',
    poster: 'https://image.tmdb.org/t/p/original/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/dyJvKsNs2KP8qQnAXbRwDjblViy.jpg',
    cast: [
      { name: 'Rumi Hiiragi', role: 'Chihiro', photo: 'https://image.tmdb.org/t/p/original/nTKM4GgfkrZvAOFL55uhEuckt7M.jpg' },
    ],
    director: 'Hayao Miyazaki', tags: ['Ghibli', 'Oscar Winner', 'Animation', 'Japanese'],
    reviews: [
      { user: 'GhibliFan', rating: 5, text: 'The most magical animated film ever made. Every frame is a painting. Miyazaki is a genius.', date: '6 Jan 2024' },
    ],
  },
  {
    id: 'jp2', title: 'Your Name.', year: 2016, rating: 8.4, duration: '1h 46m',
    genre: ['Animation', 'Romance', 'Sci-Fi'], language: 'Japanese',
    keywords: ['japanese', 'japan', 'makoto shinkai', 'anime', 'body swap', 'romance'],
    description: 'Two strangers find themselves linked in a bizarre way — a high school boy in Tokyo and a girl from a rural town begin to swap bodies.',
    poster: 'https://image.tmdb.org/t/p/original/q719jXXEzOoYaps6babgKnONONX.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/q719jXXEzOoYaps6babgKnONONX.jpg',
    cast: [
      { name: 'Ryunosuke Kamiki', role: 'Taki Tachibana (voice)', photo: 'https://image.tmdb.org/t/p/original/ut7ewXjdgUmgkhJ1EtbOo9tbc7s.jpg' },
    ],
    director: 'Makoto Shinkai', tags: ['Romance', 'Anime', 'Beautiful', 'Japanese'],
    reviews: [
      { user: 'AnimeRomanceFan', rating: 5, text: 'This film has no right to be this beautiful and this emotionally devastating. I cried for an hour.', date: '14 Feb 2024' },
    ],
  },
  {
    id: 'jp3', title: 'Princess Mononoke', year: 1997, rating: 8.4, duration: '2h 13m',
    genre: ['Animation', 'Action', 'Adventure'], language: 'Japanese',
    keywords: ['japanese', 'japan', 'studio ghibli', 'miyazaki', 'anime', 'nature', 'war'],
    description: 'A young prince infected with a deadly curse becomes embroiled in a struggle between the gods of a forest and the humans who consume its resources.',
    poster: 'https://image.tmdb.org/t/p/original/cMYCDADoLKLbB83g4WnJegaZimC.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/cMYCDADoLKLbB83g4WnJegaZimC.jpg',
    cast: [
      { name: 'Yoji Matsuda', role: 'Ashitaka (voice)', photo: 'https://image.tmdb.org/t/p/original/42WeHwCymsgJh3mLAyknCdRcef8.jpg' },
    ],
    director: 'Hayao Miyazaki', tags: ['Ghibli', 'Epic Anime', 'Nature', 'Japanese'],
    reviews: [
      { user: 'NatureLover', rating: 5, text: 'The most philosophical Ghibli film. The complexity of Miyazaki\'s worldview reaches its peak here.', date: '22 Apr 2024' },
    ],
  },
  {
    id: 'jp4', title: 'Grave of the Fireflies', year: 1988, rating: 8.5, duration: '1h 29m',
    genre: ['Animation', 'Drama', 'War'], language: 'Japanese',
    keywords: ['japanese', 'japan', 'studio ghibli', 'isao takahata', 'wwii', 'tragedy', 'anime'],
    description: 'A heartbreaking story of the deteriorating relationship between a brother and his younger sister in the final months of World War II.',
    poster: 'https://image.tmdb.org/t/p/original/im6u58cPa9HlH5DqSnZGy0O37l5.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/im6u58cPa9HlH5DqSnZGy0O37l5.jpg',
    cast: [
      { name: 'Tsutomu Tatsumi', role: 'Seita (voice)', photo: 'https://image.tmdb.org/t/p/original/bZSb4m99ehyq1KaZCGmQByvRW5z.jpg' },
    ],
    director: 'Isao Takahata', tags: ['Tragedy', 'WWII', 'Devastating', 'Japanese'],
    reviews: [
      { user: 'AnimeTragedyFan', rating: 5, text: 'The saddest film I have ever watched. I will never recover from this. Essential viewing.', date: '16 Mar 2024' },
    ],
  },
];

export default movies;
