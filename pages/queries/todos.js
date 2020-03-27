import gql from 'graphql-tag';

const FRAGMENT = gql`
  fragment todoFields on todo {
    id
    title
    completed
  }
`;

export const FETCH_TODOS  = gql`
  query {
    todos {
      ...todoFields
    }
  }
  ${FRAGMENT}
`;

export const ADD = gql`
  mutation Add($title: String!) {
    add(title: $title) {
      ...todoFields
    }
  }
  ${FRAGMENT}
`;

export const TOGGLE = gql`
  mutation Toggle($id: String!) {
    toggle(id: $id) {
      ...todoFields
    }
  }
  ${FRAGMENT}
`;

export const TOGGLE_ALL = gql`
  mutation ToggleAll($checked: Boolean!) {
    toggleAll(checked: $checked) {
      todos {
        ...todoFields
      }
    }
  }
  ${FRAGMENT}
`;

export const DESTROY = gql`
  mutation Destroy($id: String!) {
    destroy(id: $id) {
      ...todoFields
    }
  }
  ${FRAGMENT}
`;

export const CLEAR_COMPLETED = gql`
  mutation ClearCompleted {
    clearCompleted {
      ...todoFields
    }
  }
  ${FRAGMENT}
`;

export const SAVE = gql`
  mutation Save($id: String!, $title: String!) {
    save(id: $id, title: $title) {
      ...todoFields
    }
  }
  ${FRAGMENT}
`;
