
  database.ref('expenses')
  .on('child_changed', (snapshot) => {
    console.log(snapshot.key , snapshot.val());
   });

   database.ref('expenses')
  .on('child_removed', (snapshot) => {
    console.log(snapshot.key , snapshot.val());
   });

   database.ref('expenses')
   .on('child_added', (snapshot) => {
     console.log(snapshot.key , snapshot.val());
    });

database.ref('expenses')
  .on('value', (snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });
    console.log(expenses);
  },(e) => {
      console.log('Error Fetching data');
  });




database.ref('expenses').push({
      description: 'Gum',
      note: '',
      amount: 195,
      createdAt: 0
  });

database.ref('expenses').push({
    description: 'Rent',
    note: 'Every 1st of the month',
    amount: 12200,
    createdAt: 10
});

database.ref('expenses').push({
  description: 'Water',
  note: '12 days late',
  amount: 7500,
  createdAt: 100
});

database.ref('notes/-M8VwoJP9swmEbx_jUZB').update({
  body: 'Buy food'
});

database.ref('notes').push({
        title: 'Course topics',
        body: 'React, Angular, Python'
});

const firebaseNotes = {
  notes: {
    asjkfdf: {
      title: 'First Note!',
      body: 'This is my note'
    },
    piejdf: {
      title: 'Another note',
      body: 'This is my note'
    }
  }
}

 const onValueChange =  database.ref().on('value', (snapshot) => {
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
}, (e) => {
  console.log('Error Fetching data');
});


const onValueChange =  database.ref().on('value', (snapshot) => {
  console.log(snapshot.val());
}, (e) => {
  console.log('Error Fetching data');
});

setTimeout(() => {
  database.ref('age').set(29);
}, 3500);

setTimeout(() => {
  database.ref().off(onValueChange);
}, 7000);

setTimeout(() => {
  database.ref('age').set(30);
}, 10500);

database.ref()
  .once('value')
  .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
    })
  .catch((e) => {
      console.log('Error Fecthing data ' , e);
    });

database.ref().set({
  name: 'Kenny Willoughby',
  age: 26,
  job: {
    title: 'Software Developer',
    company: 'Google'
  },
  stressLevel: 6,
  location: {
      city: 'Washington D.C',
      country: 'United States'
  }
}).then(() => {
  console.log('Data is saved!');
}).catch((e) => {
  console.log('This failed. ' , e);
});

database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Seattle'
});

database.ref('location/city').set('Vienna');

database.ref('attributes').set({
      height: "5'11",
      weight: '230'
}).then(() => {
  console.log('Data is saved for the second!');
}).catch((e) => {
  console.log('This failed for the second error. ' , e);
});

database.ref('isSingle').remove().then(() => {
  console.log("Remove succeeded.")
}).catch((e) => {
  console.log("Remove failed: " + e.message)
});