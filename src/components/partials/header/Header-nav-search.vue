<template>
  <div class="pull-left">
	  <form action="#" method="get">
      <div class="input-group header-nav-search" style="width: 160px;margin-top: 10px;">
        <input type="text" name="q" class="form-control input-sm bg-light no-border rounded padder" v-bind:placeholder="'action.Search' | translate">
          <span class="input-group-btn">
            <button type="submit" name="search" id="search-btn" class="btn btn-sm bg-light rounded">
              <i class="fa fa-search"></i>
            </button>
          </span>
      </div>
    </form>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header-nav-search {
    width: 160px;
    margin-top: 7px;
  }
<style>
