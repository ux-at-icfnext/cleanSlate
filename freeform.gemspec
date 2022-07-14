Gem::Specification.new do |spec|
    spec.name          = "Nex+ Library Freeform"
    spec.version       = "0.1.0"
    spec.authors       = ["dara"]
    spec.email         = ["dara.pressley@icfnext.com"]
  
    spec.summary       = "For library specifications and prototyping"
    spec.homepage      = "http://nextfreeform.io"
    spec.license       = "MIT"
  
    spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }
  
    spec.add_runtime_dependency "jekyll", "~> 4.2"
  end
