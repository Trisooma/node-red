RED.override = (function() {
     return {
         globalEndpoint: 'https://carbon.phasma.nl:1880',
         getUrl: function(path) {
            if(this.globalEndpoint === undefined || this.globalEndpoint == '') return path;
            var retPath = this.globalEndpoint;
            if(!retPath.endsWith('/')) retPath += '/';
            retPath += path;
            return retPath;
         }
     }
 })();
