---
layout: post
title: µBrowser for Apple Watch
subtitle: A basic Browser for watchOS
permalink: "µbrowser_preReleaseBlogPost"
---
![Three screenshots of µBrowser](/img/mikroBrowserPromoBanner1.png "µBrowser Screenshots")
# Preface
Since I own the Apple Watch I was fascinated to how to bring the web to such a small device.
Glimpse supported a Apple Watch app that updated screenshots of websites on your watch.
This was a start but it was messy.
And since watchOS development changed I abannoned the extension.
I just was too complicated and it was no real web experience.


# µBrowser
## The Tale of µBrowser
The tale of µBrowser started in early 2020. It was a watchOS beta where a function to use WebKit webviews on watchOS was added.
I did some experiments and was astound how good it worked.
It was and still is limited but it is the real web experience on the Apple Watch.
On thing that was still a major flaw was how to enter the URLs.
watchOS had voice and scribble input but this was very uncomfortable to enter URLs.
I thought about a custom keyboard but to be honest I did not feel confident to deliver a good experience with this.
So I stopped working on it till the Series 7 watch came out.

I read some review pieces and I read interesting articles that said the watch is ready for a browser (like [here][3] and [here][4]).
And I could not agree more and started working on µBrowser again.

And here it is: The first standalone web browser for Apple Watch!

## Features
![µBrowser companion app bookmark](/img/mikroBrowserPromoBanner2.png "µBrowser Companion App")
* Open any URL (Entering a URL works especially good with the new Series 7 keyboard)
* Search the web with DuckDuckGo
* See your last visited pages
* Save pages from the history to your favorites
* iOS companion app to manage bookmarks


## Limitations

* A privacy prompt will be required to confirm before every browsing session. This is part of the workaround µBrowser uses. µBrowser does not collect any data.
* The watchOS keyboard is not web adress specific. Unfortunately there are no shortcuts for .com e.g. available.
* µBrowser can not sync bookmarks with Safari or any other browser



# Outlook
I believe that µBrowser can be the perfect emergency browser when you are on the go and don't have your phone with yourself.
It is a start and I hope watchOS will improve so I can add new features to µBrowser.
I'm pretty interested in deliver the best possible web experience on iOS.



# Links and Material

You can get µBrowser on the AppStore for 99ct [here][2].

Want to write about µBrowser? [Here is a presskit][5] [(Download the zip)][1]. In addition if you have any questions please get in touch.


[1]:{{ site.url }}/files/mikroBrowser_presskit.zip
[2]:https://apps.apple.com/us/app/µbrowser/id1590622755
[3]:https://www.bloomberg.com/news/newsletters/2021-10-10/can-the-apple-watch-series-7-work-on-its-own-without-an-iphone-kulj7h7o
[4]:https://9to5mac.com/2021/10/03/here-are-all-of-the-ways-watchos-8-and-series-7-point-to-greater-iphone-independence-and-whats-still-missing/
[5]:{{ '/µbrowser_presskit' | prepend: site.baseurl }}