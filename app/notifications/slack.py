import json
import requests
import random
import os

fanfare = ['Woop woop!', 'Hooray!', 'YEAH!', "That's what we're here for!", "Go team!", "Hola!", "Rad. Core.", "Dope-a-lope.", "Rock and ROLL", "Epic. Win.", "Smashed it!", "Coo coo cooooool.", "Yesyesyessssss.", "Win. N. ING.", "So GOOOOD!"]
cynical = ["Can they walk yet?", "Reckon the bots are happy in there?", "Are the robots still dummies?", "Little darlings are still in school...", "If only Luke could build an AI to WRITE his thesis...", "Still dumb? Maybe not? Probably.", "Did Luke just create STUXNET?", "OMG it looks like you built HAL. That's what you get when you mess with this stuff.", "EXTERMINATE. EXTERRRMINAAATE.", "OPEN THE POD BAY DOORS HAL", "My soul is bigger than my programming."]
def send_slack_notification(label, url):
    try:
        print("sending slack notification:", label, url)
        # Set the webhook_url to the one provided by Slack when you create the webhook at https://my.slack.com/services/new/incoming-webhook/
        webhook_url=os.environ['SLACK_WEBHOOK_URL']
        
        slack_data = {
            "username": "Deep Learning Log-Bot",
            # "icon_url": "https://slack.com/img/icons/app-57.png"
            "icon_emoji": ":video_game:",
            'text': fanfare[random.randint(0, len(fanfare) - 1)]+" New simulation recorded in logbook! <"+url+"|"+label+">"+"\n"+cynical[random.randint(0, len(cynical) - 1)]
        }

        response = requests.post(
            webhook_url, data=json.dumps(slack_data),
            headers={'Content-Type': 'application/json'}
        )
        if response.status_code != 200:
            print(
                'Request to slack returned an error %s, the response is:\n%s'
                % (response.status_code, response.text)
            )
    except:
        print("Slack Notification Failed")
        

def send_notes_slack_notification(label, url, notes, update=False):
    try:
        print("sending notes slack notification:", notes, url)
        # Set the webhook_url to the one provided by Slack when you create the webhook at https://my.slack.com/services/new/incoming-webhook/
        webhook_url=os.environ['SLACK_WEBHOOK_URL']
        
        if update:
            text = "Notes for <"+url+"|"+label+"> updated:\n>>>"+notes
        else:
            text = "New note recorded for <"+url+"|"+label+">:\n>>>"+notes
        
        slack_data = {
            "username": "Deep Learning Log-Bot",
            # "icon_url": "https://slack.com/img/icons/app-57.png"
            "icon_emoji": ":video_game:",
            'text': text
        }

        response = requests.post(
            webhook_url, data=json.dumps(slack_data),
            headers={'Content-Type': 'application/json'}
        )
        if response.status_code != 200:
            print(
                'Request to slack returned an error %s, the response is:\n%s'
                % (response.status_code, response.text)
            )
    except:
        print("Slack notification failed")


if __name__ == "__main__":
    send_slack_notification("Test Notification", "https://www.google.com")