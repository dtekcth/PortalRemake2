DTEK := stack exec dtek

build:
	stack build
	$(DTEK) build

clean:
	$(DTEK) clean

dev:
	$(DTEK) watch

rebuild: clean build
