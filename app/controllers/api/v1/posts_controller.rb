# frozen_string_literal: true

module Api
  module V1
    class PostsController < ApplicationController
      before_action :set_post, only: %i[show edit update destroy]
      # before_action :authorize_post, only: %i[show update destroy]

      # GET /api/v1/posts or /api/v1/posts.json
      def index
        @posts = current_user.posts.all
        if @posts
          render json: @posts, status: :ok
        else
          render json: @posts.errors, status: :bad_request
        end
      end

      # GET /api/v1/posts/1 or /api/v1/posts/1.json
      def show
        if @post
          render json: @post, state: :ok
        else
          render json: { message: 'post could not be found' }, status: :bad_request
        end
      end

      # GET /api/v1/posts/new
      def new
        @post = current_user.posts.new
      end

      # GET /api/v1/posts/1/edit
      def edit; end

      # POST /api/v1/posts or /api/v1/posts.json
      def create
        post = current_user.posts.new(post_params)
        if post.save
          render json: { success: 'post successfully created' }, status: :ok
        else
          render json: { error: post.errors }, status: :not_found
        end
      end

      # PATCH/PUT /posts/1 or /posts/1.json
      def update
        respond_to do |format|
          if @post.update(post_params)
            format.html { redirect_to api_v1_post_url(@post), notice: 'Post was successfully updated.' }
            format.json { render :show, status: :ok, location: api_v1_post_url(@post) }
          else
            format.html { render :edit, status: :unprocessable_entity }
            format.json { render json: @post.errors, status: :unprocessable_entity }
          end
        end
      end

      # DELETE /posts/1 or /posts/1.json
      def destroy
        respond_to do |format|
          if @post.destroy!
            format.html { redirect_to api_v1_posts_url, notice: 'Post was successfully destroyed.' }
            format.json { render json: Post.all, status: :ok }
          else
            format.html { render :edit, status: :unprocessable_entity }
            format.json { render json: { errors: @post.errors, message: 'Post does not exist', status: :bad_request } }
          end
        end
      end

      private

      # Use callbacks to share common setup or constraints between actions.
      def set_post
        @post = current_user.post.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def post_params
        params.require(:post).permit(:title, :body)
      end

      # onlye authorized user only
      def authorize_post
        return if @user == @post.user

        render json: { message: 'Unauthorized' }, status: :unauthorized
      end
    end
  end
end
