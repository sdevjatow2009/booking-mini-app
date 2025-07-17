<script>
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  let user = null;
  let fullWebAppData = {};

  onMount(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const webApp = window.Telegram.WebApp;

      // Берём user, если есть
      user = webApp.initDataUnsafe?.user || null;

      // Копируем все свойства из WebApp, кроме функций
      fullWebAppData = {};
      for (const key in webApp) {
        try {
          const val = webApp[key];
          if (typeof val !== "function") {
            fullWebAppData[key] = val;
          }
        } catch {}
      }
    }
  });

  function goBack() {
    goto("/");
  }
</script>

<button on:click={goBack}>Back</button>

{#if user}
  <h2>User Info</h2>
  <ul>
    <li><strong>ID:</strong> {user.id}</li>
    <li><strong>First Name:</strong> {user.first_name}</li>
    <li><strong>Last Name:</strong> {user.last_name}</li>
    <li><strong>Username:</strong> @{user.username}</li>
    <li><strong>Language:</strong> {user.language_code}</li>
    <li><strong>PM Allowed:</strong> {user.allows_write_to_pm ? 'Yes' : 'No'}</li>
    {#if user.photo_url}
      <li><strong>Avatar:</strong><br /><img src={user.photo_url} alt="User Avatar" width="100" /></li>
    {/if}
  </ul>
{/if}

<h2>Full Telegram.WebApp object</h2>
<pre>{JSON.stringify(fullWebAppData, null, 2)}</pre>