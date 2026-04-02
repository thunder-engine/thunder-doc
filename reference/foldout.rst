.. _api_Foldout:

Foldout
=======

Inherited: None

.. _api_Foldout_description:

Description
-----------

The Foldout class manages a UI widget that can show or hide additional content based on its expanded state. It includes functionality for adding widgets to the foldout, toggling its expanded state.



.. _api_Foldout_public:

Public Methods
--------------

+----------------------------------+-------------------------------------------------------------------------+
|        :ref:`Frame<api_Frame>` * | :ref:`container<api_Foldout_7c48b5d1>` () const                         |
+----------------------------------+-------------------------------------------------------------------------+
|  :ref:`CheckBox<api_CheckBox>` * | :ref:`indicator<api_Foldout_34d81cf2>` () const                         |
+----------------------------------+-------------------------------------------------------------------------+
|                             void | :ref:`insertWidget<api_Foldout_e9c487a0>` (int  index, Widget * widget) |
+----------------------------------+-------------------------------------------------------------------------+
|                             bool | :ref:`isExpanded<api_Foldout_93821af4>` () const                        |
+----------------------------------+-------------------------------------------------------------------------+
|                             void | :ref:`onExpand<api_Foldout_cdb290a1>` ()                                |
+----------------------------------+-------------------------------------------------------------------------+
|                             void | :ref:`setContainer<api_Foldout_0b168e9a>` (Frame * container)           |
+----------------------------------+-------------------------------------------------------------------------+
|                             void | :ref:`setExpanded<api_Foldout_81ab04f3>` (bool  expanded)               |
+----------------------------------+-------------------------------------------------------------------------+
|                             void | :ref:`setIndicator<api_Foldout_960a35de>` (CheckBox * indicator)        |
+----------------------------------+-------------------------------------------------------------------------+
|                             void | :ref:`setText<api_Foldout_ec28bf5a>` (const TString  text)              |
+----------------------------------+-------------------------------------------------------------------------+
|      :ref:`TString<api_TString>` | :ref:`text<api_Foldout_5f47603b>` () const                              |
+----------------------------------+-------------------------------------------------------------------------+



.. _api_Foldout_static:

Static Methods
--------------

None

.. _api_Foldout_methods:

Methods Description
-------------------

.. _api_Foldout_7c48b5d1:

 :ref:`Frame<api_Frame>` * **Foldout::container** () const

Returns container component attached to this widget.

**See also** setContainer().

----

.. _api_Foldout_34d81cf2:

 :ref:`CheckBox<api_CheckBox>` * **Foldout::indicator** () const

Returns indicator button to fold and unfold container with content.

**See also** setIndicator().

----

.. _api_Foldout_e9c487a0:

 void **Foldout::insertWidget** (int  *index*, :ref:`Widget<api_Widget>` * *widget*)

Inserts *widget* to the foldout's container, at given position index. Effectively placing it inside the foldout's expanded content area.

----

.. _api_Foldout_93821af4:

 bool **Foldout::isExpanded** () const

Returns true id foldout is currently expanded; otherwise returns false.

----

.. _api_Foldout_cdb290a1:

 void **Foldout::onExpand** ()

Toggles the expanded state of the foldout when the indicator is clicked.

----

.. _api_Foldout_0b168e9a:

 void **Foldout::setContainer** (:ref:`Frame<api_Frame>` * *container*)

Sets *container* component attached to this widget.

**See also** container().

----

.. _api_Foldout_81ab04f3:

 void **Foldout::setExpanded** (bool  *expanded*)

Expands or collapses the foldout based on the *expanded* parameter.

**See also** isExpanded().

----

.. _api_Foldout_960a35de:

 void **Foldout::setIndicator** (:ref:`CheckBox<api_CheckBox>` * *indicator*)

Sets *indicator* button to fold and unfold container with content.

**See also** indicator().

----

.. _api_Foldout_ec28bf5a:

 void **Foldout::setText** (:ref:`TString<api_TString>`  *text*)

Sets the label *text* for the foldout.

**See also** text().

----

.. _api_Foldout_5f47603b:

 :ref:`TString<api_TString>`  **Foldout::text** () const

Returns the current text of the foldout's label.

**See also** setText().


