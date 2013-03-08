(function() {
  var path;

  path = require('path');

  atom.workspace.observeTextEditors(function(editor) {
    if (path.extname(editor.getPath()) === '.md') {
      return editor.setSoftWrap(true);
    }
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiIgogIF0sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQSxNQUFBLElBQUE7O0FBQUEsRUFBQSxJQUFBLEdBQU8sT0FBQSxDQUFRLE1BQVIsQ0FBUCxDQUFBOztBQUFBLEVBRUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBZixDQUFrQyxTQUFDLE1BQUQsR0FBQTtBQUNoQyxJQUFBLElBQUcsSUFBSSxDQUFDLE9BQUwsQ0FBYSxNQUFNLENBQUMsT0FBUCxDQUFBLENBQWIsQ0FBQSxLQUFrQyxLQUFyQzthQUNFLE1BQU0sQ0FBQyxXQUFQLENBQW1CLElBQW5CLEVBREY7S0FEZ0M7RUFBQSxDQUFsQyxDQUZBLENBQUE7QUFBQSIKfQ==
//# sourceURL=/Users/philipp/dotfiles/atom.symlink/init.coffee