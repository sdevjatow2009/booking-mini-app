<script>
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  let slots = [
    { time: "10:00", status: "unavailable" },
    { time: "10:30", status: "unavailable" },
    { time: "11:00", status: "unavailable" },
    { time: "11:30", status: "unavailable" },
    { time: "12:00", status: "available" },
    { time: "12:30", status: "available" },
    { time: "13:00", status: "available" },
    { time: "13:30", status: "available" },
    { time: "14:00", status: "unavailable" },
    { time: "14:30", status: "unavailable" },
    { time: "15:00", status: "unavailable" },
    { time: "15:30", status: "unavailable" },
    { time: "16:00", status: "available" },
    { time: "16:30", status: "available" },
    { time: "17:00", status: "available" },
    { time: "17:30", status: "available" },
  ];

  let tgData = null;
  let selectedSlot = null;
  let showModal = false;

  onMount(() => {
    document.body.style.backgroundImage = "none";

    if (window.Telegram && window.Telegram.WebApp) {
      tgData = {};
      for (const key in window.Telegram.WebApp) {
        try {
          const val = window.Telegram.WebApp[key];
          if (typeof val !== "function") {
            tgData[key] = val;
          }
        } catch {}
      }
    }
  });

  function goToAbout() {
    goto("/about");
  }
  
  function groupSlots(slots) {
    const result = [];
    for (let i = 0; i < slots.length; i += 2) {
      result.push([slots[i], slots[i + 1]]);
    }
    return result;
  }

  function goToMain() {
    goto("/");
  }

    function openModal(slot) {
    selectedSlot = slot;
    showModal = true;
  }

  function closeModal() {
    showModal = false;
    selectedSlot = null;
  }

  function confirmReservation() {
    if (window.Telegram && window.Telegram.WebApp) {
      const payload = {
        command: "reserve-slots",
        payload: [selectedSlot.time],
      };
      window.Telegram.WebApp.sendData(JSON.stringify(payload));
    }
    closeModal();
  }
</script>

<div class="container">
  <div class="top-bar-wrapper">
    <button class="arrow-btn left-arrow">&lt;</button>
    <div class="top-bar">
      <button class="date-display">2025-06-19</button>
    </div>
    <button class="arrow-btn right-arrow">&gt;</button>
  </div>

  <div class="date-table">
    {#each groupSlots(slots) as pair}
      <div class="time-row">
        <div class="time-label">{pair[0].time}</div>
        {#each pair as slot}
          <button
            class="btn {slot.status}"
            on:click={() => slot.status === "available" && openModal(slot)}
            
          >
            {slot.time}
          </button>
        {/each}
      </div>
    {/each}
  </div>

  <div class="controls-row">
    <button class="backButton1" on:click={goToMain}>Back</button>
    <button class="aboutButton" on:click={goToAbout}>About Me</button>
  </div>

  <div class="legend">
    <span class="dot available-dot"></span> - Available
    <span class="dot unavailable-dot"></span> - Unavailable
  </div>
</div>

{#if showModal}
  <div class="modal-overlay">
    <div class="modal">
      <p>Reserve <strong>{selectedSlot.time}</strong>?</p>
      <div class="modal-buttons">
        <button on:click={confirmReservation}>Yes</button>
        <button on:click={closeModal}>Cancel</button>
      </div>
    </div>
  </div>
{/if}

<style>
  @import './booking.css';
</style>