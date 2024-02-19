from tkinter import *
#from matplotlib.pyplot import plot
#from matplotlib.pyplot import show
from matplotlib import pyplot

x = [1,2,3,4,5]
y = [5,6,7,8,9]

pyplot.plot(x,y)
pyplot.show()

win = Tk()
win.geometry("1000x500")
win.title("temp")
win.configure(bg='red')

btn = Button(win, text="버튼")
btn.pack()

win.mainloop()

#print("Hello World")