module.exports = mongoose => {
  var CommentSchema = mongoose.model(
    "comment",
    mongoose.Schema(
      {
        content: String,
      },
      { timestamps: true }
    )
  );

  return CommentSchema;
};