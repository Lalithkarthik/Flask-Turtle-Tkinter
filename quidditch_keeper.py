from turtle import Turtle


class Keeper(Turtle):
    def __init__(self, position, a):
        super().__init__()
        self.shape("square")
        if a == "red":
            b = "gold"
        elif a == "royal blue":
            b = "dark blue"
        elif a == "yellow":
            b = "black"
        else:
            b = "silver"
        self.color(b, a)
        self.shapesize(stretch_wid=5, stretch_len=1)
        self.penup()
        self.goto(position)

    def move_up(self):
        new_y = self.ycor() + 20
        self.sety(new_y)

    def move_down(self):
        new_y = self.ycor() - 20
        self.sety(new_y)
