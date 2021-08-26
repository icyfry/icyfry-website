import { shallowMount } from "@vue/test-utils";
import { Links } from "@/components/Links.vue";

describe("Links.vue", () => {
  it("renders props.title when passed", () => {
    const title = "new title";
    const wrapper = shallowMount(Links, {
      propsData: { title },
    });
    expect(wrapper.text()).toMatch(title);
  });
});
