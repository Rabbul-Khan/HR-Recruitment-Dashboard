const candidates = new Candidates({
  totalCandidates: 361,
  shortlistedCandidates: 201,
  rejectedCandidates: 160,
});

candidates.save().then((result) => {
  console.log('candidates saved!');
  mongoose.connection.close();
});
