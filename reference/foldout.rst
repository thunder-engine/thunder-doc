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
|        :ref:`Frame<api_Frame>` * | :ref:`container<api_Foldout_1256930c>` () const                         |
+----------------------------------+-------------------------------------------------------------------------+
|  :ref:`CheckBox<api_CheckBox>` * | :ref:`indicator<api_Foldout_48c96e3d>` () const                         |
+----------------------------------+-------------------------------------------------------------------------+
|                             void | :ref:`insertWidget<api_Foldout_0a3cbfe8>` (int  index, Widget * widget) |
+----------------------------------+-------------------------------------------------------------------------+
|                             bool | :ref:`isExpanded<api_Foldout_0a782c93>` () const                        |
+----------------------------------+-------------------------------------------------------------------------+
|                             void | :ref:`onExpand<api_Foldout_159fd0b3>` ()                                |
+----------------------------------+-------------------------------------------------------------------------+
|                             void | :ref:`setContainer<api_Foldout_571fc982>` (Frame * container)           |
+----------------------------------+-------------------------------------------------------------------------+
|                             void | :ref:`setExpanded<api_Foldout_edca2483>` (bool  expanded)               |
+----------------------------------+-------------------------------------------------------------------------+
|                             void | :ref:`setIndicator<api_Foldout_ae1745b0>` (CheckBox * indicator)        |
+----------------------------------+-------------------------------------------------------------------------+
|                             void | :ref:`setText<api_Foldout_b6c83207>` (const TString  text)              |
+----------------------------------+-------------------------------------------------------------------------+
|      :ref:`TString<api_TString>` | :ref:`text<api_Foldout_7a3f1869>` () const                              |
+----------------------------------+-------------------------------------------------------------------------+



.. _api_Foldout_static:

Static Methods
--------------

None

.. _api_Foldout_methods:

Methods Description
-------------------

.. _api_Foldout_1256930c:

 :ref:`Frame<api_Frame>` * **Foldout::container** () const

Returns container component attached to this widget.

**See also** setContainer().

----

.. _api_Foldout_48c96e3d:

 :ref:`CheckBox<api_CheckBox>` * **Foldout::indicator** () const

Returns indicator button to fold and unfold container with content.

**See also** setIndicator().

----

.. _api_Foldout_0a3cbfe8:

 void **Foldout::insertWidget** (int  *index*, :ref:`Widget<api_Widget>` * *widget*)

Inserts *widget* to the foldout's container, at given position *index*. Effectively placing it inside the foldout's expanded content area.

----

.. _api_Foldout_0a782c93:

 bool **Foldout::isExpanded** () const

Returns true id foldout is currently expanded; otherwise returns false.

----

.. _api_Foldout_159fd0b3:

 void **Foldout::onExpand** ()

Toggles the expanded state of the foldout when the indicator is clicked.

----

.. _api_Foldout_571fc982:

 void **Foldout::setContainer** (:ref:`Frame<api_Frame>` * *container*)

Sets *container* component attached to this widget.

**See also** *container*().

----

.. _api_Foldout_edca2483:

 void **Foldout::setExpanded** (bool  *expanded*)

Expands or collapses the foldout based on the *expanded* parameter.

**See also** isExpanded().

----

.. _api_Foldout_ae1745b0:

 void **Foldout::setIndicator** (:ref:`CheckBox<api_CheckBox>` * *indicator*)

Sets *indicator* button to fold and unfold container with content.

**See also** *indicator*().

----

.. _api_Foldout_b6c83207:

 void **Foldout::setText** (:ref:`TString<api_TString>`  *text*)

Sets the label *text* for the foldout.

**See also** *text*().

----

.. _api_Foldout_7a3f1869:

 :ref:`TString<api_TString>`  **Foldout::text** () const

Returns the current text of the foldout's label.

**See also** setText().


