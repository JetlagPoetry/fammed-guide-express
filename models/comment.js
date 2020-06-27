module.exports = mongoose => {
  var CommentSchema = mongoose.model(
    "comment",
    mongoose.Schema(
      {
        name: String,
        email: String,
        content: String,
      },
      { timestamps: true }
    )
  );

  return CommentSchema;
};