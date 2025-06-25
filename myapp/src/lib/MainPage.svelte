<script>
    import { goto } from "$app/navigation";
    import { onMount } from 'svelte';
    import TimeSlots from "./TimeSlots.svelte";

    function order(item) {
        alert(`You have ordered ${item}`);
    }

    function goToBooking() {
        goto('/booking');
    }

    onMount(() => {
        document.body.style.backgroundImage = "url('/background.png')";
        document.body.style.backgroundSize = "cover";
    })
</script>

<div class='container'>
    <div class='image-block'>
        <img src="/img.png" alt="Big img">
    </div>

    <div class="buttons-block">
        <div class="buttons-row">
            <button onclick={() => order('a Big Mac')}>
                <img src="/hamburger.png" alt="A big hamburger">
                <div>Big Mac</div>
            </button>
            <button onclick={() => order('fries')}>
                <img src="/french-fries.png" alt="Fries">
                <div>fries</div>
            </button>
        </div>

        <div class="buttons-row">
            <button onclick={goToBooking}>
                <img src="/pizza.png" alt="Pizza">
                <div>Booking</div>
            </button>
            <button onclick={() => order('a Donut')}>
                <img src="/donut.png" alt="a Donut">
                <div>A Donut</div>
            </button>
        </div>
    </div>
</div>

<style>
    @import '$lib/styles.css';
</style>