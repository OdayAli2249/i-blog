import { Actions } from "../actions";

const initialState = {
    paragraphs: null,
};

const DEFAULT_DIMENSTION = { width: 20, height: 20 }
const DEFAULT_POSITION = { x: 0, y: 0 }
const DEFAULT_COLOR = 'blue'
const DEFAULT_SHAPE = 0
const DEFAULT_TYPE = 'text'
const DEFAULT_TEXT = 'empty text'
const DEFAULT_SIZE = 20

const DEFAULT_CONTAINER = {
    dimension: DEFAULT_DIMENSTION,
    position: DEFAULT_POSITION,
    color: DEFAULT_COLOR,
    shape: DEFAULT_SHAPE,
    type: DEFAULT_TYPE,
    text: DEFAULT_TEXT
}

const DEFAULT_ELEMENT = {
    size: DEFAULT_SIZE,
    position: DEFAULT_POSITION,
    color: DEFAULT_COLOR,
    type: DEFAULT_TYPE,
    text: DEFAULT_TEXT
}

export const modifyContentReducer = (state = initialState, action) => {

    const unselectAll = (paragraphsState) => {
        const updatedParagraphState = [...paragraphsState.paragraphs];
        updatedParagraphState.map(paragraph => {
            paragraph.elements.map(element => element.selected = false);
            paragraph.container.selected = false;
        })

        return updatedParagraphState;
    }
    switch (action.type) {

        case Actions.STAGE_CONTENT_COMPLETED:
            return {
                paragraphs: action.content.paragraphs,
                focusedParagraph: null
            };
        case Actions.STAGE_CONTENT_FAILURE:
            return {
                paragraphs: null,
                focusedParagraph: null
            };
        case Actions.ON_CONTAINER_CHANGED:
            state.paragraphs.map(paragraphItem => {
                if (paragraphItem.container.name == action.container.name) {
                    paragraphItem.container = action.container;
                }
            })
            state.focusedParagraph.container = action.container
            return {
                ...state,
                focusedParagraph: state.focusedParagraph,
                paragraphs: [...state.paragraphs]
            };
        case Actions.ON_CONTAINER_CLICKED:
            var paragraphs = unselectAll(state);
            var focusedParagraph;
            paragraphs.map(paragraphItem => {
                if (paragraphItem.container.name == action.paragraph.container.name) {
                    paragraphItem.container.selected = true;
                    focusedParagraph = paragraphItem;
                }
            })
            return {
                paragraphs: [...paragraphs],
                focusedParagraph: focusedParagraph
            };
        case Actions.ON_CONTAINER_DELETED:
            var deletedParagraph;
            var updatedParagraphs = [...state.paragraphs.filter(paragraphItem => {
                if (paragraphItem.container.name != action.paragraph.container.name)
                    return true;
                else {
                    deletedParagraph = paragraphItem;
                    return false;
                }
            })]
            var isParagraphSelected = false;
            if (deletedParagraph.container.selected)
                isParagraphSelected = true;
            else {
                deletedParagraph.elements.forEach(element => {
                    if (element.selected)
                        isParagraphSelected = true;
                })
            }
            return {
                paragraphs: updatedParagraphs,
                focusedParagraph: isParagraphSelected ? null : state.focusedParagraph
            };
        case Actions.ON_ELEMENT_ADDED:
            var paragraphs = unselectAll(state);
            var updatedElements = [...action.paragraph.elements];
            updatedElements.push({ ...DEFAULT_ELEMENT, ...action.elementItem })
            var updatedParagraphs = [...paragraphs]
            updatedParagraphs.map((paragraphItem, _) => {
                if (action.paragraph.container.name == paragraphItem.container.name)
                    paragraphItem.elements = updatedElements;
            })
            return {
                paragraphs: updatedParagraphs,
                focusedParagraph: action.paragraph
            };
        case Actions.ON_ELEMENT_DELETED:
            var deletedElement;
            var updatedElements =
                [...action.paragraph.elements.filter(element => {
                    if (element.name != action.elementItem.name)
                        return true;
                    else {
                        deletedElement = element;
                        return false;
                    }
                })]
            var updatedParagraphs = [...state.paragraphs]
            updatedParagraphs.map((paragraphItem, _) => {
                if (action.paragraph.container.name == paragraphItem.container.name)
                    paragraphItem.elements = updatedElements;
            })
            return {
                paragraphs: updatedParagraphs,
                focusedParagraph: deletedElement.selected ? null : state.focusedParagraph
            };
        case Actions.ON_ELEMENT_CHANGED:
            var updatedElements = [...state.focusedParagraph.elements];
            updatedElements.map(element => {
                if (element.name == action.element.name) {
                    if (['image', 'text'].includes(action.property)) {
                        if (action.property == 'image') {
                            element.src = action.element.src
                            element.text = null
                            element.type = action.property
                        }
                        if (action.property == 'text') {
                            element.text = action.element.text
                            element.src = null
                            element.type = action.property
                        }
                    } else element[action.property] = action.element[action.property]
                }
            })
            state.focusedParagraph.elements = updatedElements;
            var updatedParagraphs = [...state.paragraphs]
            updatedParagraphs.map((paragraphItem, _) => {
                if (state.focusedParagraph.container.name == paragraphItem.container.name) {
                    paragraphItem.elements = updatedElements;
                }
            })
            return {
                ...state,
                focusedParagraph: state.focusedParagraph,
                paragraphs: [...updatedParagraphs],
            };
        case Actions.ON_ELEMENT_CLICKED:
            var focusedParagraph;
            state.paragraphs.map(paragraphItem => paragraphItem.container.selected = false);
            var updatedElements = [...action.paragraph.elements];
            updatedElements.map(element => {
                if (element.name == action.elementItem.name)
                    element.selected = true;
                else element.selected = false;
            })
            var updatedParagraphs = [...state.paragraphs]
            updatedParagraphs.map((paragraphItem, _) => {
                if (action.paragraph.container.name == paragraphItem.container.name) {
                    paragraphItem.elements = updatedElements;
                    focusedParagraph = paragraphItem;
                } else {
                    paragraphItem.elements.map(elementItem => elementItem.selected = false)
                }
            })
            return {
                paragraphs: updatedParagraphs,
                focusedParagraph: focusedParagraph
            };
        case Actions.ON_CONTAINER_ADDED:
            var paragraphs = unselectAll(state);
            var newParagraph = {
                container: { ...DEFAULT_CONTAINER, name: action.tag, selected: true },
                elements: []
            };
            return {
                paragraphs: [...paragraphs, newParagraph],
                focusedParagraph: newParagraph
            };
        default:
            return state;
    }
};