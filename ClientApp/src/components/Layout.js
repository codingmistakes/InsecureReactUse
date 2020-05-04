import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu />
        <Container>
          {this.props.children}
        </Container>
            <footer className="border-top footer text-muted">
                <div className="container">
                    Software Security Anti-Patterns &copy; 2020
                </div>
            </footer>
      </div>
    );
  }
}
