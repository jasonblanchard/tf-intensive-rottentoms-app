angular.module('core')
  .factory('Settings', function(BaseEntity) {
    var Settings = BaseEntity.extend({
      constructor: function() {
        BaseEntity.apply(this, arguments);
        this.set('isAwesome', false);
        this.set('filterRelevantStarWars', false);
      }
    })
    return new Settings();
  });
