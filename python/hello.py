from tkinter import *
from datetime import datetime
import requests
from bs4 import BeautifulSoup

#from requests import *

#from matplotlib.pyplot import plot
#from matplotlib.pyplot import show
#from matplotlib import pyplot

url = "https://www.dhlottery.co.kr/gameResult.do?method=byWin"
#req = requests.get(url)
#print(req.text)

x = [1,2,3,4,5]
y = [5,6,7,8,9]

print(datetime.now())

# pyplot.plot(x,y)
# pyplot.show()
def alert():
  print("버튼이 눌림")

win = Tk()
win.geometry("300x100")
win.title("로또 당첨번호")
win.option_add("*Font", "나눔고딕 16")
win.configure(bg='blue') 

ent = Entry(win)
ent.pack()

def ent_p():
  a = ent.get()
  print(a)

btn = Button(win, text="로또 당첨번호 확인")
btn.config(width=20, height=20)
btn.config(command=ent_p)
btn.pack()
  
win.mainloop()

#print("Hello World")