class HomeController < ApplicationController
  def index
  end

  def top100
    @content = [
      {question: "q", answer: "a"},
      {question: "b", answer: "d"}
    ]
    render json: @content
  end
end
