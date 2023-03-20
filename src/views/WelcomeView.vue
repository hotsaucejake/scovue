<script setup lang="ts">
import WelcomeNavigation from '@/components/layouts/navigation/WelcomeNavigation.vue';
</script>

<template>
  <div class="font-dosis-regular font-semibold">
    <section>
      <div class="h-screen min-h-min w-screen bg-light-desk dark:bg-dark-desk bg-cover bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100">
        <WelcomeNavigation :is-sticky="false" :is-transparent="true" />
        <div class="flex justify-center h-full">
          <h2 class="font-dosis-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl my-auto">
            <span class="font-arvo-bold text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-400 to-blue-400">
              <span class="whitespace-nowrap">Finally,</span>
            </span>
            <br />
            <span class="whitespace-nowrap">a digital <span class="font-satisfy-regular font-black text-blue-400">journal</span></span>
            <br />
            <span class="whitespace-nowrap">for <span class="text-fuchsia-400">everything.</span></span>
          </h2>
        </div>
      </div>
    </section>
    <section class="text-lg max-w-xl mx-auto">
      <p class="mt-8">JotSauce by Developepper, a hotsaucejake company.</p>
      <p class="mt-8">
        I'm an avid (analog) journaler for organization, productivity, and reflection. You can learn a lot about yourself and personal growth by revisiting
        years' worth of your own logging - you get out of it what you put into it. I log everything from spontaneous to-do lists, various things from my job,
        daily journaling/reflection, notes from articles / books, anything worth writing down - whether meaningful or trivial, etc... If you're familiar with
        the bullet journal, it's similar to that with my own flare. To the naked eye it looks like chaos, but it's very well organized. I use symbols to
        differentiate between different entries and an index in the front of the journal to keep track of the pages those symbols appear - it takes less than 5
        minutes at the end of everyday to add the page numbers for each type of entry in the index. It's a type of reflection at the end of the day. Now I can
        go to previous years' journals and view specific entries by looking in the index for all the pages those entries might appear (my weight, the cost of
        gas, daily reflection entries, what I did for work that day, etc...).
      </p>
      <p class="mt-8">
        The only con or downfall to this method, and the reason I started a create a digital version of it, is you can't easily "search" for entries by keyword
        or visual progress if the types of entries are numeric, dates, or some form of stat. For instance, I want to be able to graph my weight, or the price of
        gas at the time of purchase, or any other type of entry that can indicate status or progress. Plus, what if I want to add photos I took during the day
        with my phone to an entry? Obviously, you can't do that with a physical journal.
      </p>
      <p class="mt-8">
        So I set out to create an app that can do all of this. I believe this app will benefit anybody who uses it, regardless of background or profession with
        the ability to customize it to their own needs.
      </p>
      <p class="mt-8">
        It may sound somewhat complex, but it's pretty simple. You create the type of entry you want to make in the beginning and record your information with
        that entry. Examples would include a daily journal entry (title, date, free form text field, and possibly image uploads), a daily weight entry (date,
        numeric weight input), etc... It goes a couple steps further with the ability to tag individual entries and organize them into a collection no matter
        the type of entries. If you're an author writing a book, you might have entry types for ideas, citations, website bookmarks, actual chapters, etc... all
        fall under one type of collection you can easily view.
      </p>
      <p class="mt-8">
        Welcome to JotSauce, the digital journaling app that makes it easy to log and track all aspects of your life. Whether you're an avid journaler,
        productivity enthusiast, or someone looking to improve their personal growth, our app is designed to help you organize your thoughts and keep track of
        your progress.
      </p>
      <p class="mt-8">
        Here are some of the features that set JotSauce apart:<br />

        Customizable Entry Types: Create entry types for anything you want to track, such as daily journal entries, weight logs, expenses, and more.<br />
        Tagging and Collections: Organize your entries into collections and tag them for easy reference.<br />
        Graphing and Data Visualization: Visualize your progress over time with customizable graphs and charts.<br />
        Image Uploads: Add photos or images to your entries to give them more context and detail.<br />
        Powerful Search: Easily find specific entries by searching for keywords or tags.
      </p>
      <p class="mt-8">
        With JotSauce, you can easily track your progress and reflect on your growth over time. Whether you're looking to improve your health, track your
        finances, or just keep a daily journal, our app has everything you need to succeed.
      </p>
      <p class="mt-8">
        Here are some examples of how you can use JotSauce:<br />

        Track your weight and see your progress over time with customizable graphs and charts.<br />
        Log your daily journal entries, complete with text fields and image uploads to document your day.<br />
        Keep track of your expenses and see where your money is going with detailed analytics.<br />
        Record your ideas and inspirations with customizable entry types and collections.<br />
        Monitor your productivity and see how much you're getting done each day with detailed time logs.
      </p>
      <p class="mt-8">JotSauce is the ultimate tool for anyone looking to improve their organization, productivity, and personal growth.</p>
      <p class="mt-8">
        Some examples might include: Tracking their daily weight. Logging miles commuted for business expenses. Logging the cost of gas at the time of purchase
        and how many gallons purchased when they fill up their car. A daily journal for them to reflect on their day that might also include photos from that
        day. Keeping track of their investments. How much they spend and on what in order to track spending habits. What their workout routine was for the day.
        Keeping a collection of website bookmarks so they can easily find articles or websites again. Writing down notes, outlines, or actual chapters for a
        novel they're writing. Creating to-do lists. Keeping track of accounts and passwords as a sort of password manager. Writing down earliest known
        memories. Keeping a daily journal about their child growing up. Keeping a log of everything about vacations which could include expenses, destinations,
        and memories.
      </p>
      <p class="mt-8">
        Calories consumed or burned during the day<br />
        Sleep quality and duration<br />
        Water intake<br />
        Medications taken and dosages<br />
        Mood and emotions<br />
        Books read or movies watched<br />
        Gifts given and received<br />
        Ideas for projects or businesses<br />
        Things they're grateful for each day<br />
        Daily affirmations or mantras<br />
        Recipes they've tried or created<br />
        Skills they've learned or want to learn<br />
        Places they've traveled to or want to travel to<br />
        Daily spending, categorized by type (food, entertainment, etc.)<br />
        Memories or stories from their childhood or family history.
      </p>
      <!-- <div
        class="h-full bg-slate-100 opacity-50 dark:bg-slate-800 dark:opacity-50"
      ></div> -->
    </section>
    <WelcomeNavigation :is-sticky="true" :is-transparent="false" />
    <section>
      <p class="m-36 text-9xl font-dosis-regular">
        <span class="font-arvo-bold">Finally,</span><br />
        a digital <span class="font-satisfy-regular">journal</span><br />
        for everything.
      </p>

      <p class="m-36 font-dosis-bold text-2xl">jotsauce JotSauce JOTSAUCE</p>
      <p class="m-36 font-dosis-extra-bold text-2xl">jotsauce JotSauce JOTSAUCE</p>
      <p class="m-36 font-dosis-extra-light text-2xl">jotsauce JotSauce JOTSAUCE</p>
      <p class="m-36 font-dosis-light text-2xl">jotsauce JotSauce JOTSAUCE</p>
      <p class="m-36 font-dosis-medium text-2xl">jotsauce JotSauce JOTSAUCE</p>
      <p class="m-36 font-dosis-regular text-2xl">jotsauce JotSauce JOTSAUCE</p>
      <p class="m-36 font-dosis-semi-bold text-2xl">jotsauce JotSauce JOTSAUCE</p>
      <p class="m-36 font-arvo-regular text-2xl">jotsauce JotSauce JOTSAUCE</p>
      <p class="m-36 font-arvo-bold text-2xl">jotsauce JotSauce JOTSAUCE</p>
      <p class="m-36 font-arvo-italic text-2xl">jotsauce JotSauce JOTSAUCE</p>
      <p class="m-36 font-arvo-bold-italic text-2xl">jotsauce JotSauce JOTSAUCE</p>
      <p class="m-36 font-satisfy-regular text-2xl">jotsauce JotSauce JOTSAUCE</p>
      <p class="m-36">blah blah blah</p>
      <p class="m-36">blah blah blah</p>
      <p class="m-36">blah blah blah</p>
      <p class="m-36">blah blah blah</p>
      <p class="m-36">blah blah blah</p>
      <p class="m-36">blah blah blah</p>
      <p class="m-36">blah blah blah</p>
      <p class="m-36">blah blah blah</p>
      <p class="m-36">blah blah blah</p>
      <p class="m-36">blah blah blah</p>
      <p class="m-36">blah blah blah</p>
      <p class="m-36">blah blah blah</p>
      <!-- <div
        class="h-full bg-slate-100 opacity-50 dark:bg-slate-800 dark:opacity-50"
      ></div> -->
    </section>
  </div>
</template>
