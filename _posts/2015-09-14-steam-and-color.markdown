---
layout: post
title: "Color Part 2: Steam Inventory"
date: 2015-09-14 10:00:00
categories: design
---
![Steam Logo](/assets/img/steam/steam_logo.png)

[Valve Software](http://www.valvesoftware.com) launched the Steam game platform back in 2003. It was initially terrible, but Valve kept pushing update after update. Now Steam is the most widely used PC gaming platform on Earth (and *much* less terrible).

Since 2003, Valve has released several games and sequels. Within the last few years, their latest addition to the Counter-Strike franchise, dubbed "Global Offensive", has exploded in popularity. While the game itself costs around $15, Valve makes most of its money through microtransactions. Each weapon in Counter-Strike: Global Offensive (CS:GO) has an array of aesthetic "skins" that change the look and feel of the weapon while not affecting performance. Valve also operates a trading platform on Steam which has created a closed, virtual economy on their gaming platform.
<!--more-->
Users of Steam can buy (with real money) skins from the Steam Community Market. The money is then transferred into the Steam Wallet of the seller with a percentage of each transaction going to Valve as "Steam Tax". Once money is in a Steam Wallet, it cannot leave the Steam ecosystem. Users can only purchase new games or other skins with this money.

![A list Counter-Strike: Global Offensive knives.](/assets/img/steam/knife.png)

Some skins on the Steam Community Market, especially rare knife skins, can sell for hundreds of dollars. One sale of a knife can allow a user to purchase several AAA game titles right on the Steam platform. So where do you get these skins? You open[^keys] "cases" to get them.

Cases are obtained in-game. After you play a match in Counter-Strike, you have a chance to get a random item or case. There are many types of cases with different pools of skins you can receive if you open them. Naturally some skins are more rare (and valuable) than others.

![A Counter-Strike: Global Offensive case.](/assets/img/steam/case.png)

##Judging a Skin by its Color

While gun skins in CS:GO have a high value due to aesthetics and/or rarity, many players don't immediately know the rarity or value of every single item. To make things more clear, Valve did what Blizzard did: they added Color Coded Quality[^CCQ].

At a simple glance, just as in a World of Warcraft inventory, you can see the approximate tier of value that your items falls under by simply looking at its color. Compare the CS:GO skin color key and the image below:

<html>
<div style="width: 100%; background-color: #141517; text-align: center; padding: 1em; font-family: Noto Sans">
    <span style="color:#c0c0c0; margin-right: 6px; text-shadow: 1px 1px black">Consumer Grade </span>
    <span style="color:#99ccff; margin-right: 6px; text-shadow: 1px 1px black">Industrial Grade </span>
    <span style="color:#0000ff; margin-right: 6px; text-shadow: 1px 1px black">Mil-spec </span>
    <span style="color:#800080; margin-right: 6px; text-shadow: 1px 1px black">Restricted </span>
    <span style="color:#ff00ff; margin-right: 6px; text-shadow: 1px 1px black">Classified </span>
    <span style="color:#ff0000; margin-right: 6px; text-shadow: 1px 1px black">Covert </span>
    <span style="color:#ffcc00; margin-right: 6px; text-shadow: 1px 1px black">Exceedingly Rare ★ </span>
    <br><br>
    <span style="color: white; text-shadow: 1px 1px black">&#8594; Item Value &#8594;</span>
</div>
<br>
</html>


![A Counter-Strike: Global Offensive inventory.](/assets/img/steam/inventory.png)

If you have never played CS:GO before, this user's inventory still looks like a mess, but it becomes easier to tell that he has a few valuable items. The red (covert) knife at the top left is obviously worth more than the blue (Mil-spec) rifle at the bottom right.

This is especially useful for newer players who can't really tell what they have in their inventory. It also incentivizes opening more cases. With Color Coded Quality, you get to see which items you "almost" got when spending $2.70+ to open a single case.

![A knife being alost opened in CS:GO](/assets/img/steam/knife_open.png)

I hope this small example reiterated how important color coded interface elements can be. They can incentivize users to value things more, and they can also give a quick visual cue to identify individual objects in large lists. If anyone finds more examples of color coded quality that is not in game, please email me at [rob@prodblog.xyz](mailto:rob@prodblog.xyz)!

[^CCQ]: Color Coded Quality was introduced in an earlier post: [World of Warcraft and Color]({% post_url 2015-09-04-world-of-warcraft-and-color %}).

[^keys]: Cases are opened by using keys on them. A key is only available by purchasing them directly from Valve. Each key costs over *$2.70* USD! Most of the skins you get from cases are not very good, and are worth only a few cents. Generally people open keys with the hopes of being lucky and getting an expensive knife.
