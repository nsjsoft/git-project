from tkinter import *
#from matplotlib.pyplot import plot
#from matplotlib.pyplot import show
#from matplotlib import pyplot

x = [1,2,3,4,5]
y = [5,6,7,8,9]

# pyplot.plot(x,y)
# pyplot.show()
def alert():
  print("버튼이 눌림")

win = Tk()
win.geometry("1000x500")
win.title("temp")
win.configure(bg='blue') 

btn = Button(win, text="버튼")
btn.config(width=20, height=20)
btn.config(command=alert)
btn.pack()
  
win.mainloop()

#print("Hello World")