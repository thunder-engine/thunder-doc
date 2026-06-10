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
|        :ref:`Frame<api_Frame>` * | :ref:`container<api_Foldout_6790fc2d>` () const                         |
+----------------------------------+-------------------------------------------------------------------------+
|  :ref:`CheckBox<api_CheckBox>` * | :ref:`indicator<api_Foldout_28d436a5>` () const                         |
+----------------------------------+-------------------------------------------------------------------------+
|                             void | :ref:`insertWidget<api_Foldout_18b0d3e5>` (int  index, Widget * widget) |
+----------------------------------+-------------------------------------------------------------------------+
|                             bool | :ref:`isExpanded<api_Foldout_b7cefa25>` () const                        |
+----------------------------------+-------------------------------------------------------------------------+
|                             void | :ref:`onExpand<api_Foldout_5f604cd3>` ()                                |
+----------------------------------+-------------------------------------------------------------------------+
|                             void | :ref:`setContainer<api_Foldout_b65a4d03>` (Frame * container)           |
+----------------------------------+-------------------------------------------------------------------------+
|                             void | :ref:`setExpanded<api_Foldout_c72d46b8>` (bool  expanded)               |
+----------------------------------+-------------------------------------------------------------------------+
|                             void | :ref:`setIndicator<api_Foldout_f1c82945>` (CheckBox * indicator)        |
+----------------------------------+-------------------------------------------------------------------------+
|                             void | :ref:`setText<api_Foldout_653ed82c>` (const TString  text)              |
+----------------------------------+-------------------------------------------------------------------------+
|      :ref:`TString<api_TString>` | :ref:`text<api_Foldout_a40f1572>` () const                              |
+----------------------------------+-------------------------------------------------------------------------+



.. _api_Foldout_static:

Static Methods
--------------

None

.. _api_Foldout_methods:

Methods Description
-------------------

.. _api_Foldout_6790fc2d:

 :ref:`Frame<api_Frame>` * **Foldout::container** () const

Returns container component attached to this widget.

**See also** setContainer().

----

.. _api_Foldout_28d436a5:

 :ref:`CheckBox<api_CheckBox>` * **Foldout::indicator** () const

Returns indicator button to fold and unfold container with content.

**See also** setIndicator().

----

.. _api_Foldout_18b0d3e5:

 void **Foldout::insertWidget** (int  *index*, :ref:`Widget<api_Widget>` * *widget*)

Inserts *widget* to the foldout's container, at given position index. Effectively placing it inside the foldout's expanded content area.

----

.. _api_Foldout_b7cefa25:

 bool **Foldout::isExpanded** () const

Returns true id foldout is currently expanded; otherwise returns false.

----

.. _api_Foldout_5f604cd3:

 void **Foldout::onExpand** ()

Toggles the expanded state of the foldout when the indicator is clicked.

----

.. _api_Foldout_b65a4d03:

 void **Foldout::setContainer** (:ref:`Frame<api_Frame>` * *container*)

Sets *container* component attached to this widget.

**See also** container().

----

.. _api_Foldout_c72d46b8:

 void **Foldout::setExpanded** (bool  *expanded*)

Expands or collapses the foldout based on the *expanded* parameter.

**See also** isExpanded().

----

.. _api_Foldout_f1c82945:

 void **Foldout::setIndicator** (:ref:`CheckBox<api_CheckBox>` * *indicator*)

Sets *indicator* button to fold and unfold container with content.

**See also** indicator().

----

.. _api_Foldout_653ed82c:

 void **Foldout::setText** (:ref:`TString<api_TString>`  *text*)

Sets the label *text* for the foldout.

**See also** text().

----

.. _api_Foldout_a40f1572:

 :ref:`TString<api_TString>`  **Foldout::text** () const

Returns the current text of the foldout's label.

**See also** setText().


