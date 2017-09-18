var mongoose = require('mongoose');

module.exports = (app) => {
  app.get('/amazingStories', (req, res) => {
      req.amazingStoryModel.find({}).sort({'author': -1}).exec((err, stories) => res.json(stories))
  });

  app.post('/amazingStories', (req, res) => {
      console.log(req.body);
      var newObj = Object.assign({}, req.body, {created_at: Date.now()});
      console.log("New Object: ", newObj);
      const newStory = new req.amazingStoryModel(newObj);
      newStory.save((err, savedStory) => {
          res.json(savedStory)
      })
  })

  app.put('/amazingStories', (req, res) => {
    const idParam = req.webtaskContext.query.id;
    req.amazingStoryModel.findOne({_id: idParam}, (err, storyToUpdate) => {
        const updatedStory = Object.assign(storyToUpdate, req.body);
        updatedStory.save((err, story) => res.json(story))
    })
  })

  app.delete('/amazingStories', (req, res) => {
    const idParam = req.webtaskContext.query.id;
    req.amazingStoryModel.remove({_id: idParam}, (err, removedStory) => res.json(removedStory));
  })
}