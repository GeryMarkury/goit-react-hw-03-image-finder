import css from 'styles.module.css';

export const Searchbar = ({ onSubmit }) => (
<header className={css.Searchbar}>
  <form className={css.SearchForm}>
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
)