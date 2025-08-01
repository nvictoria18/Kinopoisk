import { PluginItem } from "@babel/core";

const removeDataTestIdBabelPlugin = (): PluginItem => {
    return {
        visitor: {
            Program(path, state) {
                const forbiddenProps = state.opts.props || [];

                path.traverse({
                    JSXIdentifier(current) {
                        const nodeName = current.node.name;

                        if (forbiddenProps.includes(nodeName)) {
                            current.parentPath.remove();
                        }
                    }
                })
            }
        }
    }
}

export default removeDataTestIdBabelPlugin;