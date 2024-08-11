from snakegame_main import snake_game
from quidditch_main import quidditch
from flask import Flask
from flask import render_template
from spells import spells
from wizards import wizards
from elixirs import elixirs
from books import book
from movies import movie
from tkinter import *
from requests import request
app = Flask(__name__)


@app.route('/')
def home_page():
    return render_template("index.html")


@app.route('/summaries/1')
def summaries_1():
    return render_template("summaries_1.html")


@app.route('/summaries/2')
def summaries_2():
    return render_template("summaries_2.html")


@app.route('/summaries/3')
def summaries_3():
    return render_template("summaries_3.html")


@app.route('/summaries/4')
def summaries_4():
    return render_template("summaries_4.html")


@app.route('/summaries/5')
def summaries_5():
    return render_template("summaries_5.html")


@app.route('/summaries/6')
def summaries_6():
    return render_template("summaries_6.html")


@app.route('/summaries/7')
def summaries_7():
    return render_template("summaries_7.html")


@app.route('/summaries/8')
def summaries_8():
    return render_template("summaries_8.html")


@app.route('/quizzes')
def quizzes():
    return render_template("quizzes.html")


@app.route("/spells/<int:number>")
def spell(number):
    return render_template("spells.html", number=number, incantation=spells[number - 1]['incantation'], spells=spells[number - 1]['name'], action=spells[number - 1]['effect'])


@app.route("/elixirs/<int:number>")
def elixir(number):
    return render_template("elixirs.html", number=number, name=elixirs[number-1]['name'], effect=elixirs[number-1]['effect'], side_effects=elixirs[number-1]['sideEffects'], characteristics=elixirs[number-1]['characteristics'], difficulty=elixirs[number-1]['difficulty'], ingredients=elixirs[number-1]['ingredients'])


@app.route("/wizards/<int:number>")
def wizard(number):
    return render_template("wizards.html", number=number, name=wizards[number-1]['name'], alternate_name=wizards[number-1]['alternate_names'], species=wizards[number-1]['species'], gender=wizards[number-1]['gender'], house=wizards[number-1]['house'], date=wizards[number-1]['dateOfBirth'], ancestry=wizards[number-1]['ancestry'], wand=wizards[number-1]['wand'], patronus=wizards[number-1]['patronus'], actor=wizards[number-1]['actor'], image=wizards[number-1]['image'])


@app.route("/books/<int:number>")
def books(number):
    return render_template("books.html", number=number, title=book[number - 1]['title'], summary=book[number - 1]['summary'], release=book[number - 1]['release_date'], dedication=book[number - 1]['dedication'], pages=book[number - 1]['pages'], cover=book[number - 1]['cover'], wiki=book[number - 1]['wiki'])


@app.route("/movies/<int:number>")
def movies(number):
    return render_template("movies.html", number=number, title=movie[number - 1]['title'], summary=movie[number - 1]['summary'], directors=movie[number - 1]['directors'], screenwriters=movie[number - 1]['screenwriters'], producers=movie[number - 1]['producers'], cinematographers=movie[number - 1]['cinematographers'], editors=movie[number - 1]['editors'], distributors=movie[number - 1]['distributors'], music_composers=movie[number - 1]['music_composers'], release_date=movie[number - 1]['release_date'], running_time=movie[number - 1]['running_time'], budget=movie[number - 1]['budget'], box_office=movie[number - 1]['box_office'], rating=movie[number - 1]['rating'], image=movie[number - 1]['poster'], wiki=movie[number - 1]['wiki'])


@app.route("/horcruxes")
def horcruxes():
    return render_template("horcruxes.html")


@app.route("/marauders")
def marauders():
    return render_template("marauders.html")


@app.route("/voldemort")
def voldemort():
    return render_template("voldemort.html")


@app.route("/albus")
def albus():
    return render_template("albus.html")


@app.route("/harry")
def harry():
    return render_template("harry.html")


@app.route("/history")
def history():
    return render_template("history.html")


@app.route("/three")
def three():
    return render_template("three.html")


@app.route("/grindelwald")
def grindelwald():
    return render_template("grindelwald.html")


@app.route("/sites")
def sites():
    return render_template("sites.html")


@app.route("/bank")
def bank():
    return render_template("bank.html")


@app.route("/quotes")
def quotes():
    response = request('GET', url="https://api.portkey.uk/quote")
    data = response.json()
    return render_template("quotes.html", quote=data['quote'], speaker=data['speaker'], story=data['story'])


@app.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html'), 500


@app.errorhandler(503)
def internal_server_error(e):
    return render_template('503.html'), 503


@app.errorhandler(404)
def internal_server_error(e):
    return render_template('404.html'), 404


window = Tk()
window.title("Welcome to ABC!")


def play_basilisk():
    window.destroy()
    snake_game()


def play_quidditch():
    window.destroy()
    quidditch()


def open_website():
    window.destroy()
    app.run()


canvas = Canvas(width=890, height=500)
background_image = PhotoImage(file="background_image.png")
canvas.create_image(450, 315, image=background_image)
instruction_text = canvas.create_text(450, 120, text="Choose the way you want to go: ", width=710, font=("Harry P", 50, "bold"), fill="white")
text_1 = canvas.create_text(140, 380, text="Click for Quidditch Keepers", width=257, font=("Harry P", 30, "bold"), fill="white")
text_2 = canvas.create_text(445, 360, text="Click for Basilisk", width=257, font=("Harry P", 30, "bold"), fill="white")
text_3 = canvas.create_text(745, 380, text="Click to explore the website", width=240, font=("Harry P", 30, "bold"), fill="white")
canvas.grid(row=0, column=0, columnspan=3)
chamber_image = PhotoImage(file="chamber_of_bg.gif")
chamber_button = Button(window, image=chamber_image, highlightthickness=0, command=play_basilisk)
chamber_button.grid(row=0, column=1)
wand_image = PhotoImage(file="wand_bg.png")
website_button = Button(window, image=wand_image, highlightthickness=0, command=open_website)
website_button.grid(row=0, column=2)
quidditch_image = PhotoImage(file="quidditch_bg.gif")
quidditch_button = Button(window, image=quidditch_image, highlightthickness=0, command=play_quidditch)
quidditch_button.grid(row=0, column=0)
window.mainloop()
# app.run(debug=True)
