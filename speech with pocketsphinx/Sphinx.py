import speech_recognition as sr
import RPi.GPIO as GPIO
import os
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(17,GPIO.OUT)
GPIO.setup(4,GPIO.OUT)

r = sr.Recognizer()
m = sr.Microphone()

try:
    print("Please wait...")
    with m as source: r.adjust_for_ambient_noise(source)
    #print("Set minimum energy threshold to {}".format(r.energy_threshold))
    while True:
        print("Say something!")
        with m as source: audio = r.listen(source)
        print("Got it! Now to recognize it...")
        try:
            value = r.recognize_sphinx(audio)

            
            print("You said {}".format(value))
            if value=="ALEXA" or value=="alexa":
               os.system("mpg321 Beep.mp3")
               os.system("mpg321 yes.mp3")
            if value=="fan on" or value=="FAN ON":
               GPIO.output(4,GPIO.HIGH)
               os.system("mpg321 fon.mp3")
            if value=="fan off" or value=="FAN OFF":
               GPIO.output(4,GPIO.LOW)
               os.system("mpg321 foff.mp3")
            if value=="lights on" or value=="LIGHTS ON":
               GPIO.output(17,GPIO.HIGH)
               os.system("mpg321 on.mp3")
            if value=="lights off" or value=="LIGHTS OFF":
               GPIO.output(17,GPIO.LOW)
               os.system("mpg321 off.mp3")
        except sr.UnknownValueError:
            print("sorry..say it again")
        except sr.RequestError as e:
            print("Uh oh! Couldn't recognize; {0}".format(e))
except KeyboardInterrupt:
    pass
