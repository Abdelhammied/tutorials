<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center mt-3">
        <h2>Posts</h2>
        <ul class="list-group">
          <li class="list-group-item" v-for="post in posts" :key="post.id">{{ post.title }}</li>
        </ul>
      </div>
    </div>

    <hr>

    <div class="row">
      <div class="col-12 text-center">
        <button
          type="button"
          class="btn btn-success"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >Add New Post</button>
      </div>

      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">Add New Post</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form id="newPost" enctype="application/x-www-form-urlencoded">
                <div class="form-group">
                  <label for="title">Post Title</label>
                  <input
                    type="text"
                    class="form-control"
                    name="title"
                    id="title"
                    v-model="postTitle"
                  >
                </div>

                <div class="form-group">
                  <label for="content">Post Content</label>
                  <textarea name="content" id="content" class="form-control" v-model="postContent"></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button
                type="button"
                form="newPost"
                class="btn btn-primary"
                @click.prevent="newPost"
              >Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      urlPosts: "http://localhost:3000/posts",
      postPost: "http://localhost:3000/posts/",
      posts: [],
      postTitle: "",
      postContent: ""
    };
  },
  created() {
    this.$http
      .get(this.urlPosts)
      .then(result => {
        this.posts = result.body;
      })
      .catch(err => {});
  },
  methods: {
    getPosts() {
      this.$http
        .get(this.urlPosts)
        .then(result => {
          this.posts = result.body;
        })
        .catch(err => {});
    },
    newPost() {
      this.$http
        .post(this.postPost, {
          title: this.postTitle,
          content: this.postContent
        })
        .then(results => {
          if (results.status == 201) {
            $("#exampleModalCenter").modal("hide");

            this.postTitle = "";
            this.postContent = "";

            const toast = this.$swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000
            });

            toast.fire({
              type: "success",
              title: "Post Was Created Successfully"
            });

            this.getPosts();
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>
