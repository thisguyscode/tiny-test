<template>
  <div
    class="c-project-details">
    
    <c-baselines></c-baselines>

    <l-wrapper class="c-project-details__inner">
      
      <!-- heading-wrapper -->
      <div
        class="c-project-details__heading-wrapper"
        @click="handleDetails"
        :class="{'active': showDetails}">

        <span class="o-heading o-heading--delta">Project details</span>
        
        <span
          v-if="showDetails"
          class="c-project-details__heading-trigger  o-text o-text--lg">
          <span class="c-project-details__heading-trigger-text">
            Hide
          </span>
          <c-icon class="c-project-details__heading-trigger-icon" name="chevron-up"></c-icon>
        </span>

        <span
          v-else
          class="c-project-details__heading-trigger  o-text o-text--lg">
          <span class="c-project-details__heading-trigger-text">
            Show
          </span>
          <c-icon class="c-project-details__heading-trigger-icon" name="chevron-down"></c-icon>
        </span>

      </div><!--END heading-wrapper -->
      
      <!-- grid-wrapper -->
      <div
        class="c-project-details__grid-wrapper"
        :class="{ 'visible': showDetails }">

        <l-grid>

          <!-- overview cell -->
          <div class="c-project-details__overview-cell l-grid__cell u-2/5@tablet">
            <h4 class="c-project-details__subheading  o-heading o-heading--delta">Overview</h4>
            <transition name="u-transition-fade">
              <p
                v-if="transitionEnd"
                class="c-project-details__overview-string  o-text">
                {{ project.overview }}
              </p>
            </transition>
          </div><!--END overview-cell -->

          <!-- details cell -->
          <div class="l-grid__cell u-3/5@tablet">
            <l-grid>
              
              <!-- column -->
              <div class="c-project-details__list-column l-grid__cell u-1/3@tablet">
                <l-grid>
                  <div class="c-project-details__group  l-grid__cell u-2/5@mobile u-1/1@tablet">
                    <h4 class="o-heading o-heading--zeta">Date</h4>
                    <transition name="u-transition-fade">
                      <p
                        v-if="transitionEnd"
                        class="c-project-details__item c-project-details__item-string  o-text">
                        {{ project.date }}
                      </p>
                    </transition>
                  </div>
                  <div class="c-project-details__group  l-grid__cell u-2/5@mobile u-1/1@tablet">
                    <h4 class="o-heading o-heading--zeta">Role</h4>
                    <transition name="u-transition-fade">
                      <p
                        v-if="transitionEnd"
                        class="c-project-details__item c-project-details__item-string  o-text">
                        {{ project.role }}
                      </p>
                    </transition>
                  </div>
                </l-grid>
              </div><!--END column -->


              <!-- column -->
              <div class="c-project-details__list-column l-grid__cell u-2/5@mobile u-1/3@tablet">
                <h4 class="o-heading o-heading--zeta">Tech</h4>
                <transition name="u-transition-fade">
                  <ul
                    v-if="transitionEnd"
                    class="c-project-details__group  o-list-bare">
                    <li
                      v-for="tech in project.techs"
                      :key="tech.id"
                      class="c-project-details__tech-wrapper">

                      <c-tech-icon :name="tech"/>

                      <span class="c-project-details__item-string  c-project-details__tech-string  o-text">{{ tech }}</span>

                    </li>
                  </ul>
                </transition>
              </div><!--END column -->

              <!-- column -->
              <div class="c-project-details__list-column l-grid__cell u-2/5@mobile u-1/3@tablet">
                <h4 class="o-heading o-heading--zeta">Skills</h4>
                <transition name="u-transition-fade">
                  <ul
                    v-if="transitionEnd"
                    class="c-project-details__group o-list-bare">
                    <li
                      v-for="skill in project.skills"
                      class="c-project-details__item"
                      :key="skill.id">
                      <span class="c-project-details__item-string  o-text">{{ skill }}</span>
                    </li>
                  </ul>
                </transition>
              </div><!--END column -->

            </l-grid>
          </div><!--END details cell -->
        </l-grid>
      </div><!--END grid-wrapper -->
    </l-wrapper>
  </div><!--END Hero -->
  
</template>

<script>
import cTechIcon from '~/components/c-tech-icon'
export default {
  data: () => {
    return {
      showDetails: false
    }
  },
  components: {
    cTechIcon
  },
  props: {
    project: {
      type: Object,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    transitionEnd: {
      type: Boolean
    }
  },
  methods: {
    handleDetails: function () {
      this.$store.commit('toggleDetails')
      this.showDetails = this.$store.state.showDetails
    }
  },
  mounted () {
    this.showDetails = this.$store.state.showDetails
  }
}
</script>


<style lang="scss" scoped>

/* Base Class
======================================================================== */
.c-project-details {
  position: relative;
  text-align: left;
  padding-top: $unit-md;
  transition: border-color .8s ease;
  margin-bottom: -1px;
  border-bottom: 1px solid $neutral-00;
  @include mq($from: tablet) {
    padding-top: $unit-lg;
  }
  background-color: $semi-transparent-background;
}




/* Details Grid
======================================================================== */
.c-project-details__grid-wrapper {
  @include mq($until: tablet) {
    display: none;
    &.visible {
      display: initial;
    }
  }
}

.c-project-details__overview-cell {
  @include mq($from: tablet) {
    padding-right: $unit-lg;
  }
}

.c-project-details__list-column {
  @include mq($from: tablet) {
    padding-right: $unit-md;
  }
}

.c-project-details__group {
  display: inline-block;
  padding-bottom: 0;
  margin-bottom: $unit-md;
}

.c-project-details__item {
  margin-bottom: $unit-sm;
  &:last-of-type {
    margin-bottom: 0;
  }
}


.c-project-details__tech-wrapper {
  display: flex;
  margin-bottom: $unit-sm;
}


.c-project-details__overview-string {
  margin-bottom: $unit-md;
}

.c-project-details__item-string,
.c-project-details__overview-string {
  color: $neutral-40;
}

.c-project-details__subheading {
  margin-bottom: $unit-sm;
}



/* Heading (mobile only)
======================================================================== */
.c-project-details__heading-wrapper {
  cursor: pointer;
  padding-bottom: $heading-trailer;
  &.active {
    box-shadow: 0 1px 0 0 $neutral-60;
    margin-bottom: $paragraph-trailer;
  }
  @include mq($from: tablet) {
    display: none;
  }
}

.c-project-details__heading-trigger {
  float: right;
}

.c-project-details__heading-trigger-text {
  margin-right: $unit-xs;
}

.c-project-details__heading-trigger-icon {
  height: .8em;
  color: $clr-primary;
}
</style>
