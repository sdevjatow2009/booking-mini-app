<script>
    import { goto } from "$app/navigation";
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

      onMount(() => {
        document.body.style.backgroundImage = 'none';
    })

    const year = writable(1974);
    const vin = writable('17A00000000000001');
    const reservationTime = writable('2025-06-27 15:23');
    const estimatedCompletionTime = writable('2025-06-28 12:00');
    const currentStatus = writable('In progress');
    const telegramUser = writable('@telegramUser');

    function goToMain() {
    goto('/');
  }
</script>

<div class="container">
  <div class="car-image">
    <img src="/golf.png" alt="Car" />
  </div>

  <div class="section-header">
    Volkswagen Golf
  </div>

  <div class="info-block">
    <div class="info-row">
      <div class="label">Year</div>
      <div class="value">{$year}</div>
    </div>
    <div class="info-row">
      <div class="label">VIN</div>
      <div class="value">{$vin}</div>
    </div>
  </div>

  <div class="section-header">
    Reservation
  </div>

  <div class="info-block">
    <div class="info-row">
      <div class="label">Reservation time</div>
      <div class="value">{$reservationTime}</div>
    </div>
    <div class="info-row">
      <div class="label">Estimated completion time</div>
      <div class="value">{$estimatedCompletionTime}</div>
    </div>
    <div class="info-row">
      <div class="label">Current status</div>
      <div class="value">{$currentStatus}</div>
    </div>
  </div>

    <div class="back-button">
        <button class="backButton" onclick={goToMain}>Back</button>
    </div>

  <div class="telegram-username">{$telegramUser}</div>
</div>

<style>
    @import '$lib/status.css';
</style>