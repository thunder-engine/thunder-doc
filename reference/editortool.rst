.. _api_EditorTool:

EditorTool
==========

Inherited: None

.. _api_EditorTool_description:

Description
-----------

The EditorTool class is an abstract base class that defines the interface for editor tools in the application. It provides common functionality and virtual methods that must be implemented by specific tool implementations.

Example:

::

    class MoveTool : public EditorTool {
    public:
        std::string icon() const override {
            return ":/Images/editor/Move.png";
        }
    
        std::string name() const override {
            return "Move Tool";
        }
    
        std::string toolTip() const override {
            return "Moves selected objects";
        }
    
        std::string shortcut() const override {
            return "Shift+T";
        }
    
        void update(bool center, bool local, bool snap) override {
            // Implement move tool logic
        }
    
        // ... other overrides as needed
    };



.. _api_EditorTool_public:

Public Methods
--------------

+--------------+--------------------------------------------------------------------------------+
|         void | :ref:`beginControl<api_EditorTool_aef42906>` ()                                |
+--------------+--------------------------------------------------------------------------------+
|         bool | :ref:`blockSelection<api_EditorTool_9a302cb5>` () const                        |
+--------------+--------------------------------------------------------------------------------+
|         void | :ref:`cancelControl<api_EditorTool_e9a036f8>` ()                               |
+--------------+--------------------------------------------------------------------------------+
|  std::string | :ref:`component<api_EditorTool_e109a236>` () const                             |
+--------------+--------------------------------------------------------------------------------+
|         void | :ref:`endControl<api_EditorTool_d4eca016>` ()                                  |
+--------------+--------------------------------------------------------------------------------+
|          int | :ref:`panel<api_EditorTool_d16be43f>` ()                                       |
+--------------+--------------------------------------------------------------------------------+
|  std::string | :ref:`shortcut<api_EditorTool_f6170349>` () const                              |
+--------------+--------------------------------------------------------------------------------+
|  std::string | :ref:`toolTip<api_EditorTool_4da327f0>` () const                               |
+--------------+--------------------------------------------------------------------------------+
|         void | :ref:`update<api_EditorTool_d76fb4a3>` (bool  center, bool  local, bool  snap) |
+--------------+--------------------------------------------------------------------------------+



.. _api_EditorTool_static:

Static Methods
--------------

None

.. _api_EditorTool_methods:

Methods Description
-------------------

.. _api_EditorTool_aef42906:

 void **EditorTool::beginControl** ()

Called when the tool begins active control. Can be used to store the initial state of controlled Component.

----

.. _api_EditorTool_9a302cb5:

 bool **EditorTool::blockSelection** () const

Determines whether the tool blocks regular selection behavior (default returns false).

----

.. _api_EditorTool_e9a036f8:

 void **EditorTool::cancelControl** ()

Cancels the current control operation. Can be used to restore the state of contolled Component.

**See also** EditorTool::beginControl().

----

.. _api_EditorTool_e109a236:

 std::string **EditorTool::component** () const

Returns the associated component type for the tool (default implementation returns empty string).

----

.. _api_EditorTool_d4eca016:

 void **EditorTool::endControl** ()

Called when the tool ends active control. Can be used to store current operation to Undo/Redo system.

----

.. _api_EditorTool_d16be43f:

 int **EditorTool::panel** ()

Returns a custom panel widget for tool options (default implementation returns nullptr).

----

.. _api_EditorTool_f6170349:

 std::string **EditorTool::shortcut** () const

Returns the keyboard shortcut for the tool (default implementation returns empty string).

----

.. _api_EditorTool_4da327f0:

 std::string **EditorTool::toolTip** () const

Returns the tooltip text for the tool (default implementation returns empty string).

----

.. _api_EditorTool_d76fb4a3:

 void **EditorTool::update** (bool  *center*, bool  *local*, bool  *snap*)

Updates the controled Component state and performs any necessary operations. Parameter *center* used for center-based or origin-based transformations. Parameter *local* used for *local* space or world space coordinates. Parameter *snap* enables stepping transform operations.


