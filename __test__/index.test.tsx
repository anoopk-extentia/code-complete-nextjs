import { createRenderer } from "react-test-renderer/shallow";
import Home from "pages";
import { Provider } from "react-redux";
import { initStore } from "store";

const renderer = createRenderer();

const store = initStore();

describe("Home Page", () => {
  it("home page renders without crashing", async () => {
    renderer.render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
