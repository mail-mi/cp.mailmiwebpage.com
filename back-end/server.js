const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/comments', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const commentSchema = new mongoose.Schema({
  name: String,
  comment: String,
  upvotes: Number
});

commentSchema.methods.upvote = function() {
  this.upvotes += 1;
  this.save();
};

const CamelostComments = mongoose.model('Camelost', commentSchema);
const RenchangedComments = mongoose.model('Renchanged', commentSchema);
const FuterrorComments = mongoose.model('Futerror', commentSchema);

/*Camelost Comments*/

app.get('/api/camelost', async (req, res) => {
  try {
    let comments = await CamelostComments.find();
    res.send({comments: comments});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/camelost', async (req, res) => {
  const comment = new CamelostComments({
    name: req.body.name,
    comment: req.body.comment,
    upvotes: 0
  });
  try {
    await comment.save();
    res.send({comment: comment});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/camelost/:id/upvote', async (req, res) => {
  try {
    let comment = await CamelostComments.findById(req.params.id);
    comment.upvotes += 1;
    comment.save();
    res.send({comment: comment});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/camelost/:id/downvote', async (req, res) => {
  try {
    let comment = await CamelostComments.findById(req.params.id);
    comment.upvotes -= 1;
    comment.save();
    res.send({comment: comment});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/camelost/:id/delete', async (req, res) => {
  try {
    await CamelostComments.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

/*Renchanged Comments*/

app.get('/api/renchanged', async (req, res) => {
  try {
    let comments = await RenchangedComments.find();
    res.send({comments: comments});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/renchanged', async (req, res) => {
  const comment = new RenchangedComments({
    name: req.body.name,
    comment: req.body.comment,
    upvotes: 0
  });
  try {
    await comment.save();
    res.send({comment: comment});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/renchanged/:id/upvote', async (req, res) => {
  try {
    let comment = await RenchangedComments.findById(req.params.id);
    comment.upvotes += 1;
    comment.save();
    res.send({comment: comment});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/renchanged/:id/downvote', async (req, res) => {
  try {
    let comment = await RenchangedComments.findById(req.params.id);
    comment.upvotes -= 1;
    comment.save();
    res.send({comment: comment});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/renchanged/:id/delete', async (req, res) => {
  try {
    await RenchangedComments.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

/*Futerror Comments*/

app.get('/api/futerror', async (req, res) => {
  try {
    let comments = await FuterrorComments.find();
    res.send({comments: comments});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/futerror', async (req, res) => {
  const comment = new FuterrorComments({
    name: req.body.name,
    comment: req.body.comment,
    upvotes: 0
  });
  try {
    await comment.save();
    res.send({comment: comment});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/futerror/:id/upvote', async (req, res) => {
  try {
    let comment = await FuterrorComments.findById(req.params.id);
    comment.upvotes += 1;
    comment.save();
    res.send({comment: comment});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/futerror/:id/downvote', async (req, res) => {
  try {
    let comment = await FuterrorComments.findById(req.params.id);
    comment.upvotes -= 1;
    comment.save();
    res.send({comment: comment});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/futerror/:id/delete', async (req, res) => {
  try {
    await FuterrorComments.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3001, () => console.log('Server listening on port 3001!'));
